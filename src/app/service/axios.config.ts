import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://185.189.12.33/api/"
      : "http://localhost:8080/api/",
  headers: {
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
});
export default http;
