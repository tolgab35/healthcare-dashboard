import styles from "./HeroBanner.module.css";
import doctorImg from "../../assets/images/doctor.png";

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-text"]}>
        <h1>Medical Checks!</h1>
        <p>
          Get free consultation and check your health condition easily with our
          expert doctors.
        </p>
        <button className={styles["hero-btn"]}>Check Now</button>
      </div>
      <div className={styles["hero-img"]}>
        <img src={doctorImg} alt="Doctor" />
      </div>
    </section>
  );
};

export default HeroBanner;
