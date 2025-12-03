// lib/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/', // Relative to your domain
  timeout: 30000, // 30 seconds (image generation can take time)
  headers: {
    'Content-Type': 'application/json'
  }
});

// Optional: Add request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.status);
      console.error('Error data:', error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;