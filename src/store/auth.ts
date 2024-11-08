import { AuthState } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("JWT") || null,
  username: null,
  permission: null,
  setUsername: (username: string) => {
    set({ username });
  },
  setToken: (token: string) => {
    localStorage.setItem("JWT", token);
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("JWT");
    set({ token: null });
  },
}));

