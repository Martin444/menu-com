import { httpGet, buildQueryString } from './http.client.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://menucom-api-production.up.railway.app';

/**
 * Cliente para los endpoints públicos de landing page (comerciantes).
 * @see docs/PUBLIC-CATALOG-ENDPOINTS.md
 */

/**
 * Lista paginada de comerciantes profesionales con catálogos públicos.
 * @param {{ page?: number, limit?: number, type?: string, search?: string, sort?: string }} params
 * @returns {Promise<{ data: any[], meta: Object }>}
 */
export async function getPublicMerchants(params = {}) {
	const query = buildQueryString({
		page: params.page,
		limit: params.limit,
		type: params.type,
		search: params.search,
		sort: params.sort,
	});
	return httpGet(`${API_BASE_URL}/public/merchants${query}`);
}

/**
 * Comerciantes destacados para la sección hero.
 * @param {{ limit?: number }} params
 * @returns {Promise<any[]>}
 */
export async function getFeaturedMerchants(params = {}) {
	const query = buildQueryString({
		limit: params.limit,
	});
	return httpGet(`${API_BASE_URL}/public/merchants/featured${query}`);
}

/**
 * Perfil público completo de un comerciante.
 * @param {string} slug
 * @returns {Promise<Object>}
 */
export async function getMerchantBySlug(slug) {
	return httpGet(`${API_BASE_URL}/public/merchants/${encodeURIComponent(slug)}`);
}

/**
 * Catálogos de un comerciante (versión liviana).
 * @param {string} slug
 * @returns {Promise<any[]>}
 */
export async function getMerchantCatalogs(slug) {
	return httpGet(`${API_BASE_URL}/public/merchants/${encodeURIComponent(slug)}/catalogs`);
}

/**
 * Categorías/tipos de negocio disponibles.
 * @returns {Promise<{ data: any[] }>}
 */
export async function getPublicCategories() {
	return httpGet(`${API_BASE_URL}/public/categories`);
}

/**
 * Estadísticas globales de la plataforma.
 * @returns {Promise<Object>}
 */
export async function getPublicStats() {
	return httpGet(`${API_BASE_URL}/public/stats`);
}

/**
 * Búsqueda unificada (merchants, catálogos e items).
 * @param {{ q?: string, type?: string, page?: number, limit?: number }} params
 * @returns {Promise<Object>}
 */
export async function searchPublic(params = {}) {
	const query = buildQueryString({
		q: params.q,
		type: params.type,
		page: params.page,
		limit: params.limit,
	});
	return httpGet(`${API_BASE_URL}/public/search${query}`);
}

/**
 * Catálogos y comerciantes trending.
 * @param {{ period?: string, limit?: number }} params
 * @returns {Promise<Object>}
 */
export async function getTrending(params = {}) {
	const query = buildQueryString({
		period: params.period,
		limit: params.limit,
	});
	return httpGet(`${API_BASE_URL}/public/trending${query}`);
}
