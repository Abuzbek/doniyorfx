import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://doniyorfx.uz/api/"
      : "http://localhost:8080/api/",
});
export default http;
