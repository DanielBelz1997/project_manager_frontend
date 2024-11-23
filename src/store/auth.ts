import { AuthState } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("JWT") || null,
  username: localStorage.getItem("username") || null,
  role: localStorage.getItem("role") || null,
  setUsername: (username: string) => {
    localStorage.setItem("username", username);
    set({ username });
  },
  setToken: (token: string) => {
    localStorage.setItem("JWT", token);
    set({ token });
  },
  setRole: (role: string) => {
    localStorage.setItem("role", role);
    set({ role });
  },
  clearLogin: () => {
    localStorage.removeItem("JWT");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    set({ token: null });
  },
}));

