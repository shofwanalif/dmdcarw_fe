import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const AUTH_PAGES = ["/login", "/register"];

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const isAuthPage =
      typeof window !== "undefined" &&
      AUTH_PAGES.some((p) => window.location.pathname.startsWith(p));

    if (typeof window !== "undefined" && status === 401 && !isAuthPage) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
