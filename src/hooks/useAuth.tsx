import { useAuthStore } from "@/store/auth";
import {
  useMutation,
  useQuery,
  QueryClient,
  useQueryClient,
} from "react-query";
import axios from "axios";
import { User } from "@/types/auth";
import { login as loginApi } from "@/api/login";

export const useAuth = () => {
  const { login, logout, user, token, isAuthenticated } = useAuthStore();

  return useMutation({
    mutationFn: loginApi,
    onSuccess(data: User) {
      if (data.token) {
        login(data.user, data.token);
      } else {
        throw new Error("no token here...");
      }
    },
    onError(error) {
      console.log("login failed, error: ", error);
    },
  });

  const { data: roleData, isLoading: roleLoading } = useQuery(
    "UserRole",
    async () => {
      if (!token) throw new Error("no token available");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/role`, {
        headers: {
          Authorization: `Breaer : ${token}`,
        },
      });

      return response.data;
    },
    {
      enabled: !!token,
    }
  );

  const handleLogout = () => {
    logout();
  };

  return {
    login: loginMutation.mutateAsync,
    logout: handleLogout,
    user,
    isAuthenticated,
    role: roleData?.role || null,
    roleLoading,
  };
};

