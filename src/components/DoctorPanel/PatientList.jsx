import styles from "./DoctorPanel.module.css";

const mockPatients = [
  { id: 1, name: "Mehmet Demir" },
  { id: 2, name: "Ayşe Kaya" },
  { id: 3, name: "Zeynep Çelik" },
];

const PatientList = ({ onSelectPatient }) => {
  return (
    <section className={styles["patient-list-section"]}>
      {/* Başlık */}
      <h3 className={styles["patient-list-section__title"]}>Hasta Listesi</h3>
      {/* Hasta kartları */}
      <div className={styles["patient-list-section__list"]}>
        {mockPatients.map((patient) => (
          <div
            className={styles["patient-list-section__card"]}
            key={patient.id}
          >
            <span className={styles["patient-list-section__name"]}>
              {patient.name}
            </span>
            <button
              className={styles["patient-list-section__button"]}
              onClick={() => onSelectPatient && onSelectPatient(patient)}
            >
              Detay
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientList;
