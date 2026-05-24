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
	const result = await httpGet(`${API_BASE_URL}/catalogs/public/search${query}`);
	return result?.data || [];
}

/**
 * Obtiene un catálogo público por su slug.
 * @param {string} slug
 * @returns {Promise<Object>}
 */
export async function getPublicCatalogBySlug(slug) {
	const result = await httpGet(`${API_BASE_URL}/catalogs/public/${encodeURIComponent(slug)}`);
	return result?.data || null;
}

/**
 * Obtiene los catálogos públicos de un propietario.
 * @param {string} ownerId
 * @returns {Promise<any[]>}
 */
export async function getPublicCatalogsByOwner(ownerId) {
	const result = await httpGet(`${API_BASE_URL}/catalogs/public/owner/${encodeURIComponent(ownerId)}`);
	return result?.data || [];
}
