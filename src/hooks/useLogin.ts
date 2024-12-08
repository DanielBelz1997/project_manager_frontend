import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/api/login/login";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError: (error: unknown) => {
      console.error(error);
    },
  });
};

