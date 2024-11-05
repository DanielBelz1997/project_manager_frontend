import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/api/login";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
