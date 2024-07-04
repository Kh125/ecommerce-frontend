import axios from "axios";

const axiosAPI = axios.create();

axiosAPI.interceptors.request.use((config) => {
  config.baseURL = "http://localhost:9090";
  return config;
});

export default axiosAPI;
