import axios from 'axios';
import  constants  from '../Utils/constants'

const axiosService = axios.create({
  baseURL: constants.baseWebsiteurlAPI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// singleton instance
export default axiosService;