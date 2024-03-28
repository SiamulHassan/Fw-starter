import { useDarkMode } from "../context/DarkModeContext";
import styles from "./MainNav.module.css";

function Logo() {
  const { isDark } = useDarkMode();
  const src = isDark ? "logo-dark.png" : "logo-light.png";
  return (
    <div className={styles.logo}>
      <img className={styles["logo-img"]} src={src} alt="Logo" />
    </div>
  );
}

export default Logo;
