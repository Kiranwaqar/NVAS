//#region node_modules/.nitro/vite/services/ssr/assets/api-CIz8wyN8.js
var API_BASE_URL = "http://localhost:8000";
var getAuthToken = () => {
	if (typeof window !== "undefined") return localStorage.getItem("scanvas-auth-token");
	return null;
};
var setAuthToken = (token) => {
	if (typeof window !== "undefined") localStorage.setItem("scanvas-auth-token", token);
};
async function apiCall(endpoint, options = {}) {
	const { data, ...fetchOptions } = options;
	const token = getAuthToken();
	const headers = {
		"Content-Type": "application/json",
		...fetchOptions.headers || {}
	};
	if (token) headers.Authorization = `Bearer ${token}`;
	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		...fetchOptions,
		headers,
		body: data ? JSON.stringify(data) : fetchOptions.body
	});
	if (!response.ok) {
		const error = await response.json().catch(() => ({}));
		throw new Error(error.detail || error.message || "API Error");
	}
	return response.json();
}
async function rawFetch(endpoint, options = {}) {
	const token = getAuthToken();
	const headers = { ...options.headers };
	if (token) headers["Authorization"] = `Bearer ${token}`;
	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		headers
	});
	if (!response.ok) {
		const error = await response.json().catch(() => ({}));
		throw new Error(error.detail || error.message || "API Error");
	}
	return response;
}
var authAPI = {
	register: (username, email, password) => apiCall("/register", {
		method: "POST",
		data: {
			username,
			email,
			password
		}
	}),
	login: (username, password) => {
		const formData = new FormData();
		formData.append("username", username);
		formData.append("password", password);
		formData.append("grant_type", "password");
		return fetch(`${API_BASE_URL}/login`, {
			method: "POST",
			body: formData
		}).then(async (res) => {
			if (!res.ok) {
				const error = await res.json().catch(() => ({}));
				throw new Error(error.detail || "Login failed");
			}
			return res.json();
		});
	}
};
var assetsAPI = {
	getAll: (status, os, vendor, ip) => {
		const params = new URLSearchParams();
		if (status) params.append("status", status);
		if (os) params.append("os", os);
		if (vendor) params.append("vendor", vendor);
		if (ip) params.append("ip", ip);
		const query = params.toString();
		return apiCall(`/assets${query ? "?" + query : ""}`);
	},
	search: (keyword) => apiCall(`/assets/search/${encodeURIComponent(keyword)}`),
	getById: (id) => apiCall(`/assets/${id}`),
	getPorts: (assetId) => apiCall(`/assets/${assetId}/ports`),
	summary: () => apiCall("/assets-summary"),
	networkSummary: () => apiCall("/network-summary")
};
var vulnerabilitiesAPI = { getAll: () => apiCall("/vulnerabilities/") };
var scanAPI = {
	start: (target) => rawFetch(`/scan/${encodeURIComponent(target)}`, { method: "POST" }),
	getHistory: () => apiCall("/scan-history"),
	getStatus: (scanId) => apiCall(`/scan-status/${scanId}`)
};
var reportsAPI = {
	exportJSON: () => rawFetch("/reports/json"),
	exportCSV: () => rawFetch("/reports/csv"),
	exportPDF: () => rawFetch("/reports/pdf")
};
//#endregion
export { setAuthToken as a, scanAPI as i, authAPI as n, vulnerabilitiesAPI as o, reportsAPI as r, assetsAPI as t };
