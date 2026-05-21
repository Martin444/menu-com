import { httpGet, buildQueryString } from './http.client.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://menucom-api-production.up.railway.app';

/**
 * Cliente para los endpoints públicos de catálogos.
 * @see docs/PUBLIC-CATALOG-ENDPOINTS.md
 */

/**
 * Busca catálogos públicos activos.
 * @param {{ type?: string, tags?: string[] }} filters
 * @returns {Promise<any[]>}
 */
export async function searchPublicCatalogs(filters = {}) {
	const query = buildQueryString({
		type: filters.type,
		tags: filters.tags?.length ? filters.tags.join(',') : undefined,
	});
	return httpGet(`${API_BASE_URL}/catalogs/public/search${query}`);
}

/**
 * Obtiene un catálogo público por su slug.
 * @param {string} slug
 * @returns {Promise<Object>}
 */
export async function getPublicCatalogBySlug(slug) {
	return httpGet(`${API_BASE_URL}/catalogs/public/${encodeURIComponent(slug)}`);
}

/**
 * Obtiene los catálogos públicos de un propietario.
 * @param {string} ownerId
 * @returns {Promise<any[]>}
 */
export async function getPublicCatalogsByOwner(ownerId) {
	return httpGet(`${API_BASE_URL}/catalogs/public/owner/${encodeURIComponent(ownerId)}`);
}
