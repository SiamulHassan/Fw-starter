import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
const Logout = () => {
  const { isLoading, logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <ButtonIcon onClick={handleLogout}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
};

export default Logout;
