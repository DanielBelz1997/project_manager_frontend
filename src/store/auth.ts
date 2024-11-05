import { AuthState } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("JWT"),
  setToken: (token: string) => {
    localStorage.setItem("JWT", token);
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("JWT");
    set({ token: null });
  },
}));

