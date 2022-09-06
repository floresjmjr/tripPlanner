import axios from 'axios';

let BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

if (process.env.NODE_ENV === 'development') {
  console.log('dev env')
  BASE_URL = process.env.REACT_APP_DEV_SERVER_BASE_URL
}

const axiosConfig = axios.create({
  baseURL: BASE_URL
})

export default axiosConfig;