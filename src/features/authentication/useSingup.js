import { useMutation } from "@tanstack/react-query";
import { singUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (fullName, email, password) =>
      singUp(fullName, email, password),
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account is crated . Please verify now");
    },
  });
  return { signup, isLoading };
}
