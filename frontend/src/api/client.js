import axios from "axios";

const client = axios.create({
  baseURL: "http://jhb.gonetis.com/api/",
  // baseURL: "http://127.0.0.1:8080/",
  headers: {
    "Content-Type": "Application/json",
  },
});

export default client;
