import { axiosInstance } from "@/api/axiosInstance";
import { AuthState } from "@/types/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      username: null,
      role: null,
      token: null, // Include token in state
      initializeSession: async () => {
        try {
          const res = await axiosInstance.get<{
            username: string;
            role: string;
            token: string;
          }>("/auth/profile", {
            withCredentials: true,
          });

          if (res.status >= 200 && res.status < 300) {
            const { username, role, token } = res.data;
            set({ username, role, token });
          }
        } catch (e) {
          console.error("Session initialization failed", e);
          set({ username: null, role: null, token: null });
        }
      },
      setToken: (token: string) => set({ token }),
      setUsername: (username: string) => {
        set({ username });
      },
      setRole: (role: string) => {
        set({ role });
      },
      clearLogin: () => {
        set({ username: null, role: null, token: null }); // Clear all state
      },
    }),
    {
      name: "auth-storage", // Key for localStorage or sessionStorage
      partialize: (state) => {
        return {
          ...state,
        };
      },
    }
  )
);

