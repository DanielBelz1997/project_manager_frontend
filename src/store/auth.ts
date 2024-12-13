import { AuthState } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  username: null,
  role: null,
  setUsername: (username: string) => {
    set({ username });
  },
  setToken: (token: string) => {
    set({ token });
  },
  setRole: (role: string) => {
    set({ role });
  },
  clearLogin: () => {
    set({ token: null, username: null, role: null });
  },
}));

