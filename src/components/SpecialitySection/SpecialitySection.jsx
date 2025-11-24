import styles from "./SpecialitySection.module.css";
import SpecialityCard from "./SpecialityCard";

const specialties = [
  { name: "General", icon: "stethoscope" },
  { name: "Dentist", icon: "tooth" },
  { name: "Cardiology", icon: "heart-pulse" },
  { name: "Neurology", icon: "brain" },
  { name: "Nutritionist", icon: "apple-whole" },
  { name: "Pediatrician", icon: "baby" },
  { name: "Psychiatry", icon: "user-nurse" },
  { name: "More", icon: "ellipsis" },
];

const SpecialitySection = () => {
  return (
    <section className={styles["speciality-section"]}>
      <h2 className={styles["section-title"]}>Doctor Speciality</h2>
      <div className={styles["speciality-grid"]}>
        {specialties.map((item, index) => (
          <SpecialityCard key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default SpecialitySection;
