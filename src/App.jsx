import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage/AppointmentPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import DoctorDetailPage from "./pages/DoctorDetailPage/DoctorDetailPage.jsx";
import CalendarPage from "./pages/CalendarPage/CalendarPage.jsx";
import DoctorCalendar from "./components/DoctorPanel/DoctorCalendar.jsx";
import DoctorDashboard from "./components/DoctorPanel/DoctorDashboard";
import DoctorProfile from "./components/DoctorPanel/DoctorProfile";
import PatientList from "./components/DoctorPanel/PatientList";

function App() {
  // Mock: Kullanıcı login ve doktor mu kontrolü (gerçek uygulamada context veya global state kullanılabilir)
  const isLoggedIn = true;
  const userRole = "doctor";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment/:doctorId" element={<AppointmentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/doctor/:doctorId" element={<DoctorDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/calendar" element={<CalendarPage />} />

        {/* Doktor paneli için nested route yapısı */}
        <Route
          path="/doctor"
          element={
            isLoggedIn && userRole === "doctor" ? (
              <DoctorDashboard />
            ) : (
              <LoginPage />
            )
          }
        >
          <Route index element={<Navigate to="calendar" replace />} />
          <Route path="profile" element={<DoctorProfile />} />
          <Route path="calendar" element={<DoctorCalendar />} />
          <Route path="patients" element={<PatientList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
