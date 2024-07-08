import axios from "axios";

const baseURL = "http://localhost:9090";

// public axios
const axiosAPI = axios.create({
  baseURL: baseURL,
});

// private axios
export const axiosPrivate = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosAPI;
