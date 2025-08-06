// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://mindtypev2-1-0kjk.onrender.com';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    RESET_PASSWORD: `${API_BASE_URL}/api/auth/reset-password`,
  },
  POSTS: {
    CREATE: `${API_BASE_URL}/api/posts`,
    GET_ALL: `${API_BASE_URL}/api/posts`,
    GET_BY_ID: (id) => `${API_BASE_URL}/api/posts/${id}`,
    UPDATE: (id) => `${API_BASE_URL}/api/posts/${id}`,
    DELETE: (id) => `${API_BASE_URL}/api/posts/${id}`,
    GET_MINE: `${API_BASE_URL}/api/posts/mine`,
    ADD_COMMENT: (id) => `${API_BASE_URL}/api/posts/${id}/comments`,
  },
};

export default API_BASE_URL; 