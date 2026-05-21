const DEFAULT_TIMEOUT = 10000;
const DEFAULT_RETRIES = 2;

/**
 * Build a query string from a plain object, skipping null/undefined values.
 * @param {Record<string, any>} params
 * @returns {string}
 */
export function buildQueryString(params) {
	const urlParams = new URLSearchParams();
	Object.entries(params).forEach(([key, value]) => {
		if (value === undefined || value === null) return;
		if (Array.isArray(value)) {
			urlParams.append(key, value.join(','));
		} else {
			urlParams.append(key, String(value));
		}
	});
	const qs = urlParams.toString();
	return qs ? `?${qs}` : '';
}

/**
 * Delay helper for retries.
 * @param {number} ms
 * @returns {Promise<void>}
 */
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch with timeout using AbortController.
 * @param {string} url
 * @param {RequestInit} [options]
 * @param {number} [timeoutMs]
 * @returns {Promise<Response>}
 */
async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_TIMEOUT) {
	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), timeoutMs);

	try {
		const response = await fetch(url, {
			...options,
			signal: controller.signal,
		});
		return response;
	} finally {
		clearTimeout(id);
	}
}

/**
 * Perform an HTTP request with retries and exponential backoff.
 *
 * @param {string} url
 * @param {RequestInit} [options]
 * @param {{ retries?: number, timeout?: number }} [config]
 * @returns {Promise<Response>}
 * @throws {Error}
 */
export async function httpRequest(url, options = {}, config = {}) {
	const retries = config.retries ?? DEFAULT_RETRIES;
	const timeout = config.timeout ?? DEFAULT_TIMEOUT;
	let lastError;

	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			const response = await fetchWithTimeout(url, options, timeout);
			return response;
		} catch (err) {
			lastError = err instanceof Error ? err : new Error(String(err));
			const isRetryable = lastError.name === 'AbortError' || (lastError instanceof TypeError);
			if (!isRetryable || attempt === retries) break;
			// Exponential backoff: 1s, 2s
			await delay(1000 * Math.pow(2, attempt));
		}
	}

	throw lastError;
}

/**
 * Perform a GET request and parse JSON, handling HTTP errors.
 *
 * @param {string} url
 * @param {{ retries?: number, timeout?: number }} [config]
 * @returns {Promise<any>}
 */
export async function httpGet(url, config = {}) {
	const response = await httpRequest(
		url,
		{
			headers: {
				Accept: 'application/json',
			},
		},
		config,
	);

	if (!response.ok) {
		let body;
		try {
			body = await response.json();
		} catch {
			body = null;
		}
		const message = body?.message || body?.error || `HTTP ${response.status}`;
		throw new Error(message);
	}

	return response.json();
}
