import axios from "axios";

export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
});
