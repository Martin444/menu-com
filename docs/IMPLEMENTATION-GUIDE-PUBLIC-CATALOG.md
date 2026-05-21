# Guía de Implementación: Public Catalog Endpoints

## Resumen

Implementación de 3 endpoints REST públicos para descubrimiento de catálogos activos:

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/catalogs/public/search` | GET | Búsqueda filtrada por tipo/tags, ordenada por popularidad |
| `/catalogs/public/:slug` | GET | Detalle de un catálogo por slug (incrementa views) |
| `/catalogs/public/owner/:ownerId` | GET | Listado de catálogos de un propietario |

---

## 1. Esquema de Base de Datos (PostgreSQL)

### Tablas

```sql
-- Tipos de catálogo
CREATE TYPE catalog_type AS ENUM ('MENU', 'WARDROBE');
CREATE TYPE item_status AS ENUM ('AVAILABLE', 'UNAVAILABLE', 'DRAFT');

CREATE TABLE catalogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    catalog_type catalog_type NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    cover_image_url TEXT,
    tags TEXT[] DEFAULT '{}',
    metadata JSONB DEFAULT '{}',
    owner_id UUID NOT NULL REFERENCES users(id),
    is_public BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE catalog_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    catalog_id UUID NOT NULL REFERENCES catalogs(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    discount_price NUMERIC(10,2),
    photo_url TEXT,
    is_available BOOLEAN DEFAULT true,
    status item_status DEFAULT 'AVAILABLE',
    attributes JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    photo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
```

### Índices Recomendados

```sql
-- Búsqueda por tipo + tags (partial index solo catálogos públicos activos)
CREATE INDEX idx_catalogs_public_search 
ON catalogs (catalog_type, view_count DESC) 
WHERE is_public = true AND is_active = true;

-- Búsqueda por tags usando GIN
CREATE INDEX idx_catalogs_tags 
ON catalogs USING GIN (tags) 
WHERE is_public = true AND is_active = true;

-- Búsqueda por slug (único y público)
CREATE INDEX idx_catalogs_slug 
ON catalogs (slug) 
WHERE is_public = true AND is_active = true;

-- Búsqueda por owner
CREATE INDEX idx_catalogs_owner 
ON catalogs (owner_id, created_at DESC) 
WHERE is_public = true AND is_active = true;

-- Items disponibles por catálogo
CREATE INDEX idx_items_catalog_available 
ON catalog_items (catalog_id) 
WHERE is_available = true AND status = 'AVAILABLE';
```

> **Nota:** Los partial indexes reducen el tamaño del índice y mejoran la performance al excluir registros que nunca se consultan (catálogos privados o inactivos).

---

## 2. Estructura de Módulos (NestJS)

```
src/
├── modules/
│   └── public-catalog/
│       ├── public-catalog.module.ts
│       ├── public-catalog.controller.ts
│       ├── public-catalog.service.ts
│       ├── public-catalog.repository.ts
│       ├── dto/
│       │   ├── search-catalogs-query.dto.ts
│       │   ├── public-catalog-response.dto.ts
│       │   ├── public-catalog-detail-response.dto.ts
│       │   └── catalog-owner-response.dto.ts
│       └── interfaces/
│           └── catalog-filters.interface.ts
```

---

## 3. DTOs

### `search-catalogs-query.dto.ts`

```typescript
import { IsOptional, IsEnum, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export enum CatalogType {
  MENU = 'MENU',
  WARDROBE = 'WARDROBE',
}

export class SearchCatalogsQueryDto {
  @IsOptional()
  @IsEnum(CatalogType)
  type?: CatalogType;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (!value) return undefined;
    return value.split(',').map((t: string) => t.trim().toLowerCase());
  })
  tags?: string[];
}
```

### `public-catalog-response.dto.ts`

```typescript
import { Expose, Type } from 'class-transformer';

class OwnerDto {
  @Expose() id: string;
  @Expose() name: string;
  @Expose() photoURL: string;
}

export class PublicCatalogResponseDto {
  @Expose() id: string;
  @Expose() catalogType: string;
  @Expose() name: string;
  @Expose() description: string;
  @Expose() coverImageUrl: string;
  @Expose() tags: string[];
  @Expose() metadata: Record<string, any>;
  @Expose() viewCount: number;
  @Expose() createdAt: Date;

  @Expose()
  @Type(() => OwnerDto)
  owner: OwnerDto;
}
```

### `public-catalog-detail-response.dto.ts`

```typescript
import { Expose, Type } from 'class-transformer';
import { PublicCatalogResponseDto } from './public-catalog-response.dto';

class CatalogItemDto {
  @Expose() id: string;
  @Expose() name: string;
  @Expose() description: string;
  @Expose() price: number;
  @Expose() discountPrice: number;
  @Expose() photoURL: string;
  @Expose() isAvailable: boolean;
  @Expose() status: string;
  @Expose() attributes: Record<string, any>;
}

export class PublicCatalogDetailResponseDto extends PublicCatalogResponseDto {
  @Expose()
  @Type(() => CatalogItemDto)
  items: CatalogItemDto[];
}
```

### `owner-catalogs-response.dto.ts`

```typescript
import { Expose, Type } from 'class-transformer';
import { PublicCatalogResponseDto } from './public-catalog-response.dto';

export class OwnerCatalogsResponseDto extends PublicCatalogResponseDto {
  @Expose() slug: string;
  @Expose() itemCount: number;

  @Expose()
  @Type(() => CatalogItemDto)
  items: CatalogItemDto[];
}
```

---

## 4. Repository (`public-catalog.repository.ts`)

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatalogType } from '../dto/search-catalogs-query.dto';

@Injectable()
export class PublicCatalogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async searchPublicCatalogs(type?: CatalogType, tags?: string[]) {
    const where = {
      is_public: true,
      is_active: true,
      ...(type && { catalog_type: type }),
      ...(tags && tags.length > 0 && { tags: { hasEvery: tags } }),
    };

    return this.prisma.catalog.findMany({
      where,
      orderBy: { view_count: 'desc' },
      take: 20,
      include: {
        owner: {
          select: { id: true, name: true, photo_url: true },
        },
      },
    });
  }

  async findPublicCatalogBySlug(slug: string) {
    return this.prisma.catalog.findFirst({
      where: {
        slug,
        is_public: true,
        is_active: true,
      },
      include: {
        owner: {
          select: { id: true, name: true, photo_url: true },
        },
        items: {
          where: {
            is_available: true,
            status: 'AVAILABLE',
          },
        },
      },
    });
  }

  async incrementViewCount(catalogId: string) {
    return this.prisma.catalog.update({
      where: { id: catalogId },
      data: {
        view_count: { increment: 1 },
      },
    });
  }

  async findPublicCatalogsByOwner(ownerId: string) {
    return this.prisma.catalog.findMany({
      where: {
        owner_id: ownerId,
        is_public: true,
        is_active: true,
      },
      orderBy: { created_at: 'desc' },
      include: {
        owner: {
          select: { id: true, name: true, photo_url: true },
        },
        items: {
          where: {
            is_available: true,
            status: 'AVAILABLE',
          },
        },
        _count: {
          select: { items: true },
        },
      },
    });
  }
}
```

---

## 5. Service (`public-catalog.service.ts`)

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicCatalogRepository } from './public-catalog.repository';
import { SearchCatalogsQueryDto } from './dto/search-catalogs-query.dto';
import { plainToInstance } from 'class-transformer';
import { PublicCatalogResponseDto } from './dto/public-catalog-response.dto';
import { PublicCatalogDetailResponseDto } from './dto/public-catalog-detail-response.dto';
import { OwnerCatalogsResponseDto } from './dto/owner-catalogs-response.dto';

@Injectable()
export class PublicCatalogService {
  constructor(private readonly repo: PublicCatalogRepository) {}

  async search(query: SearchCatalogsQueryDto) {
    const catalogs = await this.repo.searchPublicCatalogs(query.type, query.tags);
    return plainToInstance(PublicCatalogResponseDto, catalogs, {
      excludeExtraneousValues: true,
    });
  }

  async getBySlug(slug: string) {
    const catalog = await this.repo.findPublicCatalogBySlug(slug);

    if (!catalog) {
      throw new NotFoundException('Catálogo no encontrado o no es público');
    }

    // Incremento de views en background (fire-and-forget)
    this.repo.incrementViewCount(catalog.id).catch(() => {
      // Silenciar error de contador para no afectar la respuesta
    });

    return plainToInstance(PublicCatalogDetailResponseDto, catalog, {
      excludeExtraneousValues: true,
    });
  }

  async getByOwner(ownerId: string) {
    const catalogs = await this.repo.findPublicCatalogsByOwner(ownerId);

    if (!catalogs || catalogs.length === 0) {
      throw new NotFoundException('No se encontraron catálogos públicos para este owner');
    }

    const mapped = catalogs.map((c) => ({
      ...c,
      itemCount: c._count.items,
    }));

    return plainToInstance(OwnerCatalogsResponseDto, mapped, {
      excludeExtraneousValues: true,
    });
  }
}
```

---

## 6. Controller (`public-catalog.controller.ts`)

```typescript
import { Controller, Get, Param, Query } from '@nestjs/common';
import { PublicCatalogService } from './public-catalog.service';
import { SearchCatalogsQueryDto } from './dto/search-catalogs-query.dto';
import { PublicCatalogResponseDto } from './dto/public-catalog-response.dto';
import { PublicCatalogDetailResponseDto } from './dto/public-catalog-detail-response.dto';
import { OwnerCatalogsResponseDto } from './dto/owner-catalogs-response.dto';

@Controller('catalogs/public')
export class PublicCatalogController {
  constructor(private readonly service: PublicCatalogService) {}

  @Get('search')
  search(@Query() query: SearchCatalogsQueryDto): Promise<PublicCatalogResponseDto[]> {
    return this.service.search(query);
  }

  @Get(':slug')
  getBySlug(@Param('slug') slug: string): Promise<PublicCatalogDetailResponseDto> {
    return this.service.getBySlug(slug);
  }

  @Get('owner/:ownerId')
  getByOwner(
    @Param('ownerId') ownerId: string,
  ): Promise<OwnerCatalogsResponseDto[]> {
    return this.service.getByOwner(ownerId);
  }
}
```

> **Importante:** El orden de las rutas importa. `search` debe ir antes que `:slug` para que NestJS no interprete "search" como un slug.

---

## 7. Módulo (`public-catalog.module.ts`)

```typescript
import { Module } from '@nestjs/common';
import { PublicCatalogController } from './public-catalog.controller';
import { PublicCatalogService } from './public-catalog.service';
import { PublicCatalogRepository } from './public-catalog.repository';

@Module({
  controllers: [PublicCatalogController],
  providers: [PublicCatalogService, PublicCatalogRepository],
})
export class PublicCatalogModule {}
```

---

## 8. Configuración de Serialización Global

En `main.ts`, asegurar que `ClassSerializerInterceptor` está activo para que los `@Expose()` de los DTOs funcionen:

```typescript
import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

---

## 9. Decisiones Clave de Implementación

| Aspecto | Decisión | Justificación |
|---------|----------|---------------|
| **Paginación** | Limit fijo (20) en search | Requisito del spec. Se puede extender a cursor-based si crece. |
| **View Count** | Fire-and-forget async | No bloquear la respuesta del usuario por un contador. En alta escala, reemplazar por evento/colita. |
| **Índices** | Partial indexes | Los catálogos privados/inactivos nunca se consultan; el índice es más chico y rápido. |
| **Tags** | Array de strings + GIN | Búsqueda exacta por tags. Para full-text search, evaluar `tsvector`. |
| **Owner endpoint** | 404 si no hay resultados | Requisito del spec. Alternativa válida: 200 con array vacío (más RESTful). |
| **Items filtrados** | Solo AVAILABLE en detalle/owner | Requisito del spec. A nivel query, no en memoria. |

---

## 10. Próximos Pasos / Mejoras

1. **Rate limiting** en los endpoints públicos (por IP o por sesión).
2. **Cacheo con Redis** para catálogos populares (especialmente `GET /:slug`).
3. **Cursor pagination** si el volumen de catálogos crece más allá de 20.
4. **Event-driven view count**: reemplazar el `increment` directo por un evento a una cola (Redis/Bull) para no saturar writes en PostgreSQL.
5. **Full-text search** si se necesita buscar por nombre/descripción, no solo por tags.
