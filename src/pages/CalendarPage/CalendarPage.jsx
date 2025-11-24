import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./CalendarPage.module.css";

// Example appointment data
const mockAppointments = [
  {
    id: 1,
    doctor: "Dr. Ayşe Yılmaz",
    date: "2024-06-10",
    time: "10:00",
    status: "Completed",
  },
  {
    id: 2,
    doctor: "Dr. Mehmet Demir",
    date: "2024-06-15",
    time: "14:00",
    status: "Cancelled",
  },
  {
    id: 3,
    doctor: "Dr. Emily Clark",
    date: "2024-07-01",
    time: "09:00",
    status: "Upcoming",
  },
];

/**
 * CalendarPage component displays a table of user appointments.
 */
const CalendarPage = () => {
  return (
    <div className={styles["calendar-container"]}>
      <Navbar />
      <div className={styles["calendar-content"]}>
        <h2 className={styles["calendar-title"]}>Calendar</h2>
        <table className={styles["calendar-table"]}>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockAppointments.map((a) => (
              <tr key={a.id}>
                <td>{a.doctor}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default CalendarPage;
