import { useState } from "react";
import styles from "./TopDoctorsSection.module.css";
import DoctorCard from "./DoctorCard";
import { useNavigate } from "react-router-dom";

const doctors = [
  { id: "1", name: "Dr. Emily Clark", speciality: "General" },
  { id: "2", name: "Dr. James Smith", speciality: "Dentist" },
  { id: "3", name: "Dr. Clara Reed", speciality: "Nutritionist" },
  { id: "4", name: "Dr. Alan Lee", speciality: "General" },
  { id: "5", name: "Dr. Sophia Kim", speciality: "Dentist" },
];

const categories = ["All", "General", "Dentist", "Nutritionist"];

const TopDoctorsSection = () => {
  const [selected, setSelected] = useState("All");
  const navigate = useNavigate();
  const filteredDoctors =
    selected === "All"
      ? doctors
      : doctors.filter((doc) => doc.speciality === selected);

  return (
    <div className={styles["top-doctors-section"]}>
      <div className={styles["top-header"]}>
        <h2>Top Doctors</h2>
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles["filter-btn"]} ${
                selected === cat ? styles.active : ""
              }`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className={styles["doctor-list"]}>
        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/doctor/${doc.id}`)}
          >
            <DoctorCard name={doc.name} speciality={doc.speciality} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctorsSection;
