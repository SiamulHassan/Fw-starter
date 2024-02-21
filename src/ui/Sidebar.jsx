import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../../data/Uploader";

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Logo />
      <MainNav />
      <Uploader />
    </aside>
  );
}

export default Sidebar;
