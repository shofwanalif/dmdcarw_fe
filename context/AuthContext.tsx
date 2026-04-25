"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  authService,
  type LoginRequest,
  type RegisterRequest,
} from "@/app/services/auth/auth.service";

type AuthUser = {
  id?: string | number;
  name?: string;
  email?: string;
  [key: string]: unknown;
} | null;

type AuthContextType = {
  user: AuthUser;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginRequest) => Promise<void>;
  register: (payload: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function normalizeMeResponse(data: unknown): AuthUser {
  if (!data || typeof data !== "object") return null;

  // common API shapes: { user: {...} } or direct user object
  const obj = data as Record<string, unknown>;
  const candidate =
    (obj.user as Record<string, unknown> | undefined) ??
    (data as Record<string, unknown>);

  if (!candidate || typeof candidate !== "object") return null;
  return candidate as AuthUser;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshMe = useCallback(async () => {
    setIsLoading(true);
    try {
      const me = await authService.getMe();
      setUser(normalizeMeResponse(me.data));
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshMe();
  }, [refreshMe]);

  const login = useCallback(async (payload: LoginRequest) => {
    setIsLoading(true);
    try {
      await authService.login(payload);
      const me = await authService.getMe();
      setUser(normalizeMeResponse(me));
      console.log(me);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (payload: RegisterRequest) => {
    setIsLoading(true);
    try {
      await authService.register(payload);
      const me = await authService.getMe();
      setUser(normalizeMeResponse(me));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      register,
      logout,
      refreshMe,
    }),
    [user, isLoading, login, register, logout, refreshMe],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
