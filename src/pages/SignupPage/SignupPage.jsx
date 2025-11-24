import { useState } from "react";
import styles from "./SignupPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

/**
 * SignupPage component for user registration.
 * Includes name, email, password fields, error handling, and navigation to login.
 */
const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle signup form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Registration successful!");
  };

  return (
    <div className={styles["signup-container"]}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
        <Navbar isLogin={true} />
      </div>
      <form className={styles["signup-form"]} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className={styles["signup-error"]}>{error}</div>}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <div className={styles["signup-login-link"]}>
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default SignupPage;
