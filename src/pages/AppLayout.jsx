// import AppNav from "../components/AppNav";
import Sidebar from "./../components/Sidebar";
import styles from "./Applayout.module.css";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      {/* <AppNav /> */}
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
