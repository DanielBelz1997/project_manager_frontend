import { AuthState } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("JWT") || null,
  username: localStorage.getItem("username") || null,
  permission: null,
  setUsername: (username: string) => {
    localStorage.setItem("username", username);
    set({ username });
  },
  setToken: (token: string) => {
    localStorage.setItem("JWT", token);
    set({ token });
  },
  clearLogin: () => {
    localStorage.removeItem("JWT");
    localStorage.removeItem("username");
    set({ token: null });
  },
}));

