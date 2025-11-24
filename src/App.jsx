import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage/AppointmentPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import DoctorDetailPage from "./pages/DoctorDetailPage/DoctorDetailPage.jsx";
import CalendarPage from "./pages/CalendarPage/CalendarPage.jsx";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
