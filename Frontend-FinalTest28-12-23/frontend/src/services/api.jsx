import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44364/api/', 
});

export default api;