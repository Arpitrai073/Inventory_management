// This will use the build-time variable inside Docker,
// and your .env.local file when running locally.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;