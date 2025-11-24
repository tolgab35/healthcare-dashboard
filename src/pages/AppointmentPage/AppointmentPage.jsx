import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./AppointmentPage.module.css";

/**
 * AppointmentPage component for booking an appointment with a doctor.
 * Displays doctor info, booking form, and confirmation message.
 */
const AppointmentPage = () => {
  const { doctorId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // Doctor info can be passed via location.state or fetched by doctorId
  const doctor = location.state?.doctor || null;

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the appointment data to your backend
  };

  if (!doctor) {
    return (
      <div className={styles["notfound-container"]}>
        <Navbar />
        <div className={styles["notfound-content"]}>
          <h2>Doctor not found</h2>
          <button className={styles["back-btn"]} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles["appointment-container"]}>
      <Navbar />
      <div className={styles["appointment-content"]}>
        <div className={styles["appointment-card"]}>
          <h2 className={styles["appointment-title"]}>Book an Appointment</h2>
          <div className={styles["doctor-info"]}>
            <img
              src={doctor.photo || "/logo192.png"}
              alt={doctor.name}
              className={styles["doctor-img"]}
            />
            <div>
              <div className={styles["doctor-name"]}>{doctor.name}</div>
              <div className={styles["doctor-speciality"]}>
                {doctor.speciality}
              </div>
            </div>
          </div>
          {submitted ? (
            <div className={styles["confirmation-message"]}>
              <h3>Appointment Booked!</h3>
              <p>Thank you, {form.name}. We will contact you soon.</p>
              <button
                className={styles["back-btn"]}
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
            </div>
          ) : (
            <form
              className={styles["appointment-form"]}
              onSubmit={handleSubmit}
            >
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </label>
              <div className={styles["form-row"]}>
                <label>
                  Date
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Time
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <button className={styles["submit-btn"]} type="submit">
                Book Appointment
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
