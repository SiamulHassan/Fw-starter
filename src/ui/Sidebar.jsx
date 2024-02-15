import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
