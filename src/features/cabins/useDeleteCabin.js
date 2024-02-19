import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (cabinId) => deleteCabins(cabinId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => alert(err.message),
  });
  return { isDeleting, deleteCabin };
}
