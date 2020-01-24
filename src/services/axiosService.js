import axios from 'axios';
import { baseWebsiteurAPI } from '../Utils/constants'

const axiosService = axios.create({
  baseURL: baseWebsiteurAPI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// singleton instance
export default axiosService;