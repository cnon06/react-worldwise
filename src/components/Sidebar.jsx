import styles from "./sidebar.module.css";

import Logo from "./Logo";
import { Outlet } from "react-router-dom";
// import PageNav from "./PageNav";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* <PageNav /> */}
      <Outlet />
      {/* <p>List of cities</p> */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
