import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_KEY,
    language: "pt-BR",
  },
});
