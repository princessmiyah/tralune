import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.tralune.local';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth tokens
apiClient.interceptors.request.use((config) => {
  // Add token to headers if available
  return config;
});

export default apiClient;
