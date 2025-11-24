import styles from "./SpecialitySection.module.css";

const SpecialityCard = ({ name, icon }) => {
  return (
    <div className={styles["speciality-card"]}>
      <i className={`fa-solid fa-${icon}`}></i>
      <span>{name}</span>
    </div>
  );
};

export default SpecialityCard;
