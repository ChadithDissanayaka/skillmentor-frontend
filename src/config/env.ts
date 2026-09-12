const rawBackendUrl = import.meta.env.VITE_BACKEND_URL;

const BACKEND_URL = rawBackendUrl.endsWith("/api/v1")
  ? rawBackendUrl
  : `${rawBackendUrl.replace(/\/+$/, "")}/api/v1`;

export { BACKEND_URL };

