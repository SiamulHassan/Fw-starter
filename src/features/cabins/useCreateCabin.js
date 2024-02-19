import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabins } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  // crating a cabin
  const { isLoading, mutate: createCabin } = useMutation({
    mutationFn: (newCabin) => createCabins(newCabin),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      toast.success("form submitted successfully !");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, createCabin };
}
