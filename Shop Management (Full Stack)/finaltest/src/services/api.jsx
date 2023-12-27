// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7157/api', 
});

export default api;
 