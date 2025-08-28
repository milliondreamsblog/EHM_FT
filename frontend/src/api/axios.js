import axios from "axios";

const API = axios.create({
  baseURL: "https://ehm-ft.onrender.com", // backend URL
});

// Attach token(if availabe) from localStorage to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("authorization");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
