import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const savedToken = localStorage.getItem('@stars-deck-token');

export function addToken(token: string) {
  api.interceptors.request.use(configuration => {
    const config = configuration;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
}

if (savedToken) addToken(savedToken);

export default api;
