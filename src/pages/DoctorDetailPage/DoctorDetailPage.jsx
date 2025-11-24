import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import doctorImg from "../../assets/images/doctor.png";
import styles from "./DoctorDetailPage.module.css";

// Example doctor data (would come from API in real app)
const DOCTORS = [
  {
    id: "1",
    name: "Dr. Ayşe Yılmaz",
    speciality: "Cardiology",
    about: "With 20 years of experience, your heart health is in safe hands.",
    img: doctorImg,
  },
  {
    id: "2",
    name: "Dr. Mehmet Demir",
    speciality: "Internal Medicine",
    about: "A holistic internal medicine specialist for his patients.",
    img: doctorImg,
  },
  // More doctors can be added
];

/**
 * DoctorDetailPage component displays detailed info about a doctor and allows booking an appointment.
 */
const DoctorDetailPage = () => {
  const { doctorId } = useParams();
  const doctor = DOCTORS.find((d) => d.id === doctorId);
  const [showAppointment, setShowAppointment] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(false);

  if (!doctor) {
    return <div>Doctor not found.</div>;
  }

  // Handle appointment form submission
  const handleAppointment = (e) => {
    e.preventDefault();
    if (date && time) {
      setSuccess(true);
    }
  };

  return (
    <div className={styles["doctor-detail-container"]}>
      <Navbar />
      <div className={styles["doctor-detail-content"]}>
        <img
          src={doctor.img}
          alt={doctor.name}
          className={styles["doctor-detail-img"]}
        />
        <div className={styles["doctor-detail-info"]}>
          <h2>{doctor.name}</h2>
          <div className={styles["doctor-speciality"]}>{doctor.speciality}</div>
          <p className={styles["doctor-about"]}>{doctor.about}</p>
          <button
            className={styles["appointment-btn"]}
            onClick={() => setShowAppointment(true)}
          >
            Book Appointment
          </button>
        </div>
      </div>
      {showAppointment && (
        <div className={styles["appointment-modal"]}>
          <form
            className={styles["appointment-form"]}
            onSubmit={handleAppointment}
          >
            <h3>Book Appointment</h3>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label>Time:</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select time</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
            </select>
            <button type="submit">Confirm</button>
            <button
              type="button"
              className={styles["close-btn"]}
              onClick={() => setShowAppointment(false)}
            >
              Cancel
            </button>
            {success && (
              <div className={styles["appointment-success"]}>
                Your appointment has been successfully created!
              </div>
            )}
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DoctorDetailPage;
