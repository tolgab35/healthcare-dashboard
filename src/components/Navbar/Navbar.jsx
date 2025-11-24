import styles from "./Navbar.module.css";
import profileImg from "../../assets/images/profile.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ isLogin, isDoctorPanel }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    navigate("/login");
  };

  // Doctor panel custom navbar
  if (isDoctorPanel) {
    // Active tab is determined by route
    const path = location.pathname;
    return (
      <nav className={`${styles.navbar} ${styles["navbar-doctor-panel"]}`}>
        <div
          className={styles["navbar-left"]}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/doctor/profile")}
        >
          <img
            src={profileImg}
            alt="Profile"
            className={styles["profile-img"]}
          />
          <div
            className={styles.greeting}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <p style={{ margin: 0, fontSize: "0.95rem", color: "#777" }}>
              Good Morning 👋
            </p>
            <h3
              style={{
                margin: 0,
                fontSize: "1.2rem",
                color: "#333",
                fontWeight: 600,
              }}
            >
              Dr. Ahmet Yılmaz
            </h3>
          </div>
        </div>
        <div
          className={`${styles["navbar-center"]} ${styles["doctor-nav-links"]}`}
        >
          <span
            className={
              path === "/doctor/calendar"
                ? `${styles["doctor-nav-link"]} ${styles.active}`
                : styles["doctor-nav-link"]
            }
            onClick={() => navigate("/doctor/calendar")}
          >
            Calendar
          </span>
          <span
            className={
              path === "/doctor/patients"
                ? `${styles["doctor-nav-link"]} ${styles.active}`
                : styles["doctor-nav-link"]
            }
            onClick={() => navigate("/doctor/patients")}
          >
            Patient List
          </span>
          <span
            className={
              path === "/doctor/profile"
                ? `${styles["doctor-nav-link"]} ${styles.active}`
                : styles["doctor-nav-link"]
            }
            onClick={() => navigate("/doctor/profile")}
          >
            Profile
          </span>
        </div>
        <div className={styles["navbar-right"]}>
          <i className="far fa-bell"></i>
          <i className="far fa-heart"></i>
          <button className={styles["logout-btn"]} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    );
  }

  if (isLogin) {
    return (
      <nav className={`${styles.navbar} ${styles["navbar-login"]}`}>
        <div className={styles["navbar-center"]}>
          <span className={styles["site-title"]}>Health Web App</span>
        </div>
      </nav>
    );
  }

  // User navbar (Home, Calendar, Profile)
  return (
    <nav className={`${styles.navbar} ${styles["navbar-user-panel"]}`}>
      <div className={styles["navbar-left"]}>
        <img
          src={profileImg}
          alt="Profile"
          className={styles["profile-img"]}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        />
        <div
          className={styles.greeting}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <p style={{ margin: 0, fontSize: "0.95rem", color: "#777" }}>
            Good Morning 👋
          </p>
          <h3
            style={{
              margin: 0,
              fontSize: "1.2rem",
              color: "#333",
              fontWeight: 600,
            }}
          >
            Andrew Ainsley
          </h3>
        </div>
      </div>
      <div className={`${styles["navbar-center"]} ${styles["user-nav-links"]}`}>
        <span
          className={
            location.pathname === "/"
              ? `${styles["user-nav-link"]} ${styles.active}`
              : styles["user-nav-link"]
          }
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span
          className={
            location.pathname === "/calendar"
              ? `${styles["user-nav-link"]} ${styles.active}`
              : styles["user-nav-link"]
          }
          onClick={() => navigate("/calendar")}
        >
          Calendar
        </span>
        <span
          className={
            location.pathname === "/profile"
              ? `${styles["user-nav-link"]} ${styles.active}`
              : styles["user-nav-link"]
          }
          onClick={() => navigate("/profile")}
        >
          Profile
        </span>
      </div>
      <div className={styles["navbar-right"]}>
        <i className="far fa-bell"></i>
        <i className="far fa-heart"></i>
        <button className={styles["logout-btn"]} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
