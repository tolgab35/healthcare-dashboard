import styles from "./DoctorPanel.module.css";

// Randevu verilerini mock olarak tutuyoruz
const appointments = [
  { time: "10:00 - 10:30", patient: "Mehmet Demir" },
  { time: "11:00 - 11:30", patient: "Ayşe Kaya" },
  { time: "13:00 - 13:30", patient: "Zeynep Çelik" },
];

export const DoctorCalendar = () => {
  return (
    <section className={styles["calendar-section"]}>
      {/* Başlık */}
      <h3 className={styles["calendar-section__title"]}>Randevu Takvimi</h3>
      {/* Randevu kartları */}
      <div className={styles["calendar-section__list"]}>
        {appointments.map((appt, idx) => (
          <div className={styles["calendar-section__card"]} key={idx}>
            <span className={styles["calendar-section__time"]}>
              {appt.time}
            </span>
            <span className={styles["calendar-section__patient"]}>
              Hasta: {appt.patient}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorCalendar;
