import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { BASE_URL } from "./systemConfigs";

export const history = createBrowserHistory();

// const navigate = useNavigate();
// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include the JWT token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.data?.message === "Invalid/Expired token.") {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("userId");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
