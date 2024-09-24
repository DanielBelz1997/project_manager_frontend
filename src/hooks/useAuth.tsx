import { User } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticate: false,
  isAdmin: false,
  login: (user: User) =>
    set({ user, isAuthenticate: true, isAdmin: user.role === 1 }),
  logout: () => set({ user: null, isAuthenticate: false, isAdmin: false }),
}));
