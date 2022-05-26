import axios from "axios";

const api = axios.create({
  baseURL: "https://buildspace-demo.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;