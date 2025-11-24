import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import profileImg from "../../assets/images/profile.jpg";
import styles from "./ProfilePage.module.css";

// Example user data
const mockUser = {
  name: "Tolga Yılmaz",
  email: "tolga@example.com",
  photo: profileImg,
};

/**
 * ProfilePage component displays and allows editing of user profile information.
 * Includes profile photo, name, email, and password change form.
 */
const ProfilePage = () => {
  const [user, setUser] = useState(mockUser);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [photo, setPhoto] = useState(user.photo);
  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });
  const [pwError, setPwError] = useState("");
  const [pwSuccess, setPwSuccess] = useState("");

  // Handle profile photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Save edited profile info
  const handleSave = () => {
    setUser({ ...user, name, email, photo });
    setEditMode(false);
  };

  // Handle password change form submission
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPwError("");
    setPwSuccess("");
    if (!passwords.old || !passwords.new || !passwords.confirm) {
      setPwError("Please fill in all fields.");
      return;
    }
    if (passwords.new !== passwords.confirm) {
      setPwError("New passwords do not match.");
      return;
    }
    setPwSuccess("Password changed successfully (example flow)");
    setPasswords({ old: "", new: "", confirm: "" });
  };

  return (
    <div className={styles["profile-container"]}>
      <Navbar />
      <div className={styles["profile-main-card"]}>
        <div className={styles["profile-card-top"]}>
          <div className={styles["profile-photo-section"]}>
            <img
              src={photo}
              alt="Profile"
              className={styles["profile-photo"]}
            />
            {editMode && (
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            )}
          </div>
          <div className={styles["profile-info-section"]}>
            {editMode ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles["profile-input"]}
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles["profile-input"]}
                  placeholder="Email"
                />
                <button
                  className={styles["profile-save-btn"]}
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className={styles["profile-cancel-btn"]}
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h2>{user.name}</h2>
                <div className={styles["profile-email"]}>{user.email}</div>
                <button
                  className={styles["profile-edit-btn"]}
                  onClick={() => setEditMode(true)}
                >
                  Edit Info
                </button>
              </>
            )}
          </div>
        </div>
        <div className={styles["profile-section-divider"]} />
        <div className={styles["profile-password-section"]}>
          <h3>Change Password</h3>
          <form
            className={styles["profile-password-form"]}
            onSubmit={handlePasswordChange}
          >
            <input
              type="password"
              placeholder="Current Password"
              value={passwords.old}
              onChange={(e) =>
                setPasswords({ ...passwords, old: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="New Password (Repeat)"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
            />
            <button type="submit">Change Password</button>
            {pwError && (
              <div className={styles["profile-error"]}>{pwError}</div>
            )}
            {pwSuccess && (
              <div className={styles["profile-success"]}>{pwSuccess}</div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
