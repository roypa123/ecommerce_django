import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthResponse } from "@/endpoints/auth";

interface AuthState {
    name: string | null;
    email: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    setAuth: (data: AuthResponse) => void;
    setAccessToken: (token: string) => void;
    logout: () => void;

}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      name: null,
      email: null,
      accessToken: null,
      refreshToken: null,
      setAuth: (data) =>
        set({
          name: data.name,
          email: data.email,
          accessToken: data.access,
          refreshToken: data.refresh,
        }),
      setAccessToken: (token) => set({ accessToken: token }),
      logout: () =>
        set({ name: null, email: null, accessToken: null, refreshToken: null }),
    }),
    { name: "auth-storage" }
  )
);