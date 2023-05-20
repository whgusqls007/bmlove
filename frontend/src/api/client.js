import axios, { AxiosHeaders } from "axios";

export const client = axios.create({
  baseURL: "http://jhb.gonetis.com/api/",
  // baseURL: "http://127.0.0.1:8080/",
  headers: {
    "Content-Type": "Application/json",
  },
});

export const image = axios.create({
  baseURL: "http://jhb.gonetis.com/api/",
  headers: {
    "Content-Type": "Multipart/form-data",
  },
});
