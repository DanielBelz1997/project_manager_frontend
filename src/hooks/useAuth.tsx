import { useAuthStore } from "@/store/auth"
import { useMutation, useQuery } from "react-query"
import axios from "axios"
import { User } from "@/types/auth"

export const useAuth = () => {
  const { login, logout, user, token, isAuthenticated } = useAuthStore()

  const loginMutation = useMutation(
    async (credentials: { email: string; password: string; }) => {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`, credentials);
      return response.data;
    },
    {
      onSuccess(data: User) {
        if (data.token) {
          login(data.user, data.token)
        } else {
          throw new Error("no token here...")
        }
      },
      onError(error) {
        console.error('Login Failed', error) // implementing a function that replace this
      }
    }
  )

  const { data: roleData, isLoading: roleLoading } = useQuery(
    'UserRole',
    async () => {
      if (!token) throw new Error('no token available');
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/role`, {
        headers: {
          Authorization: `Breaer : ${token}`
        }
      });

      return response.data;
    },
    {
      enabled: !!token
    }
  )

  const handleLogout = () => {
    logout()
  }

  return {
    login: loginMutation.mutateAsync,
    logout: handleLogout,
    user,
    isAuthenticated,
    role: roleData?.role || null,
    roleLoading
  }
}