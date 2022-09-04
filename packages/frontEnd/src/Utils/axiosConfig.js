import axios from "axios";

const axiosConfig = axios.create({
  // baseURL: 'http://localhost:8080'
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

export default axiosConfig;
