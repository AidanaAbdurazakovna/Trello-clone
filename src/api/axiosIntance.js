import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "https://b0ddf1ccfd36dfee.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});