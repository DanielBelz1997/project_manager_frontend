import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "@/api/contact";

export const useCreateContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

