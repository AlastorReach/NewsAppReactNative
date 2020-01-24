import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://josuemoragonzalez.dx.am/wp-json/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// singleton instance
export default axiosService;