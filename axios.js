import axios from 'axios';

const baseURL = 'http://localhost:8000/api'; // Replace with your server URL

const axios_client = axios.create({
  baseURL,
});

axios_client.interceptors.request.use(config => {
  const token = localStorage.getItem('awesome');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axios_client;
