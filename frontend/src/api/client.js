import axios from "axios";

const client = axios.create({
  baseURL: "http://jhb.gonetis.com/api/",
  headers: {
    "Content-Type": "Application/json",
  },
});

export default client;
