import Logout from "../features/authentication/Logout";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logout />
    </header>
  );
}

export default Header;
