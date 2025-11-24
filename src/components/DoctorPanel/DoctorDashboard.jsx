import styles from "./DoctorPanel.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const DoctorDashboard = () => {
  return (
    <div className={styles["doctor-dashboard-bg"]}>
      <Navbar isDoctorPanel={true} />
      <main className={styles["doctor-dashboard-main-container"]}>
        <div className={styles["doctor-dashboard-content-grid"]}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
