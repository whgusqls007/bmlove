import axios from "axios";

const client = axios.create({
    baseURL: "http://18.224.45.108/api/",
    // baseURL: "http://127.0.0.1:8080/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;
