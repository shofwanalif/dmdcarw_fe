import { api } from "../../lib/axios";

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export const authService = {
  login: async (data: LoginRequest) => {
    const response = await api.post("/api/auth/sign-in/email", data);
    return response.data;
  },

  register: async (data: RegisterRequest) => {
    const response = await api.post("/api/auth/sign-up/email", data);
    return response.data;
  },

  getMe: async () => {
    const response = await api.get("/api/user/me");
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/api/auth/sign-out");
    return response.data;
  },
};
