import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useLogin() {
  const navigate = useNavigate();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (user) => {
      // always succes e success data ta dibe--->akhetre user amader success data
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log(`error on useLogin:`, error.message);
      toast.error("Email or Password invalid");
    },
  });
  return { isLoading, login };
}

//////////////////////  why not useQuery ??
/*
ami believe kori, je useQuery use kore o kora jabe but aktu jamela ache--
1) queryKey use kora lagbe
2) data cache hobe but supabase already localStorage e data save raktese auto, so hudai cache korar kno mane hoy na
2) queryKey er pore holo queryFn use korbo ja user ke fetch korbe (ortht akhane apiLogin e data pass korbo)

so ato jhamela na koira useMutation diye easily kora jacche

*/
