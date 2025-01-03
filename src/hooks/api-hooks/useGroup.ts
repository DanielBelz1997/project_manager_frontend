import { getAllGroups } from "@/api/group";
import { useQuery } from "@tanstack/react-query";

export const useGroups = () => {
  return useQuery({
    queryKey: ["groups"],
    queryFn: getAllGroups,
  });
};
