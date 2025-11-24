import styles from "./TopDoctorsSection.module.css";

const DoctorCard = ({ name, speciality }) => {
  return (
    <div className={styles["doctor-card"]}>
      <p className={styles["doctor-name"]}>{name}</p>
      <p className={styles["doctor-speciality"]}>{speciality}</p>
    </div>
  );
};

export default DoctorCard;
