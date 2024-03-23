import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      // remove all cache from react-query
      queryClient.removeQueries();
      // replace true use na korle browser er back btn kaj kore na
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}
