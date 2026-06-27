// API client for Scanvas backend
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Get stored auth token
export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("scanvas-auth-token");
  }
  return null;
};

// Store auth token
export const setAuthToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("scanvas-auth-token", token);
  }
};

// Clear auth token
export const clearAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("scanvas-auth-token");
  }
};

export type StoredUser = {
  username: string;
  email?: string;
  role?: string;
  fullName?: string;
};

export const getStoredUser = (): StoredUser | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("scanvas-user");
    return raw ? (JSON.parse(raw) as StoredUser) : null;
  } catch {
    return null;
  }
};

export const setStoredUser = (user: StoredUser) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("scanvas-user", JSON.stringify(user));
  }
};

export const clearStoredUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("scanvas-user");
  }
};

// Generic fetch wrapper
async function apiCall(
  endpoint: string,
  options: RequestInit & { data?: any } = {}
) {
  const { data, ...fetchOptions } = options;
  const token = getAuthToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((fetchOptions.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
    body: data ? JSON.stringify(data) : fetchOptions.body,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    const message =
      typeof error.detail === "string"
        ? error.detail
        : typeof error.message === "string"
        ? error.message
        : typeof error === "string"
        ? error
        : JSON.stringify(error.detail || error) || "API Error";
    throw new Error(message);
  }

  return response.json();
}

async function rawFetch(endpoint: string, options: RequestInit = {}) {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    ...((options.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || error.message || "API Error");
  }

  return response;
}

// Auth API
export const authAPI = {
  register: (
    username: string,
    email: string,
    password: string,
    role: string = "user",
    fullName?: string,
  ) =>
    apiCall("/register", {
      method: "POST",
      data: {
        username,
        email,
        password,
        role,
        full_name: fullName,
      },
    }),

  login: (username: string, password: string) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("grant_type", "password");

    return fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      body: formData,
    }).then(async (res) => {
      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.detail || "Login failed");
      }
      return res.json();
    });
  },

  me: () => apiCall("/me"),
};

// Assets API
export const assetsAPI = {
  getAll: (status?: string, os?: string, vendor?: string, ip?: string) => {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (os) params.append("os", os);
    if (vendor) params.append("vendor", vendor);
    if (ip) params.append("ip", ip);
    
    const query = params.toString();
    return apiCall(`/assets${query ? "?" + query : ""}`);
  },

  search: (keyword: string) =>
    apiCall(`/assets/search/${encodeURIComponent(keyword)}`),

  getById: (id: string) =>
    apiCall(`/assets/${id}`),

  getPorts: (assetId: string) =>
    apiCall(`/assets/${assetId}/ports`),

  summary: () =>
    apiCall("/assets-summary"),

  networkSummary: () =>
    apiCall("/network-summary"),
};

// Vulnerabilities API
export const vulnerabilitiesAPI = {
  getAll: () =>
    apiCall("/vulnerabilities/"),
};

// Scan API
export const scanAPI = {
  start: (target: string) =>
    rawFetch(`/scan/${encodeURIComponent(target)}`, {
      method: "POST",
    }),

  getHistory: () =>
    apiCall("/scan-history"),

  getStatus: (scanId: string) =>
    apiCall(`/scan-status/${scanId}`),
};

// Reports API
export const reportsAPI = {
  exportJSON: () =>
    rawFetch("/reports/json"),

  exportCSV: () =>
    rawFetch("/reports/csv"),

  exportPDF: () =>
    rawFetch("/reports/pdf"),
};

