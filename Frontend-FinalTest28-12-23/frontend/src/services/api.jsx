// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://localhost:44364/api/', 
// });

// export default api;

import axios from 'axios';

const baseURL = 'https://localhost:44364/api/';

const api = axios.create({
  baseURL,
});

export default api;
export { baseURL };
