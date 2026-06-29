import axios from "axios";

const api = axios.create({
  baseURL: "http://expense-tracker-website-65kb-8f60zf4yb-rajib05.vercel.app",
});

export default api;