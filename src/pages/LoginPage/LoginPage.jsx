import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./LoginPage.module.css";

/**
 * LoginPage component for user authentication.
 * Includes email/password fields, error handling, and navigation to signup.
 */
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert("Login successful!");
  };

  return (
    <div className={styles["login-container"]}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
        <Navbar isLogin={true} />
      </div>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className={styles["login-error"]}>{error}</div>}
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
        <button type="submit">Login</button>
        <div className={styles["login-signup-link"]}>
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </form>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
