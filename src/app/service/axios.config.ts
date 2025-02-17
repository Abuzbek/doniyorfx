import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://doniyorfx.uz/api/v2/"
      : "http://localhost:8080/api/v2/",
});
export default http;
