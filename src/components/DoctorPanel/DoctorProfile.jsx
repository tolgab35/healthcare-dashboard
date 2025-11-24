import { useState } from "react";
import profileImg from "../../assets/images/profile.jpg";
import styles from "../../pages/ProfilePage/ProfilePage.module.css";

// Doktor örnek verisi
const mockDoctor = {
  name: "Dr. Ahmet Yılmaz",
  email: "ahmet.yilmaz@example.com",
  photo: profileImg,
};

const DoctorProfile = () => {
  const [user, setUser] = useState(mockDoctor);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [photo, setPhoto] = useState(user.photo);
  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });
  const [pwError, setPwError] = useState("");
  const [pwSuccess, setPwSuccess] = useState("");

  // Profil fotoğrafı değişimi
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Profili kaydet
  const handleSave = () => {
    setUser({ ...user, name, email, photo });
    setEditMode(false);
  };

  // Şifre değiştirme
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPwError("");
    setPwSuccess("");
    if (!passwords.old || !passwords.new || !passwords.confirm) {
      setPwError("Lütfen tüm alanları doldurun.");
      return;
    }
    if (passwords.new !== passwords.confirm) {
      setPwError("Yeni şifreler eşleşmiyor.");
      return;
    }
    setPwSuccess("Şifre başarıyla değiştirildi (örnek akış)");
    setPasswords({ old: "", new: "", confirm: "" });
  };

  // Profile kartını başlık altına ortalanmış şekilde yerleştiriyoruz
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gridColumn: "2 / span 1",
      }}
    >
      <div className={styles["profile-main-card"]} style={{ marginTop: 0 }}>
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
                  placeholder="Ad Soyad"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles["profile-input"]}
                  placeholder="E-posta"
                />
                <button
                  className={styles["profile-save-btn"]}
                  onClick={handleSave}
                >
                  Kaydet
                </button>
                <button
                  className={styles["profile-cancel-btn"]}
                  onClick={() => setEditMode(false)}
                >
                  İptal
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
                  Bilgileri Düzenle
                </button>
              </>
            )}
          </div>
        </div>
        <div className={styles["profile-section-divider"]} />
        <div className={styles["profile-password-section"]}>
          <h3>Şifre Değiştir</h3>
          <form
            className={styles["profile-password-form"]}
            onSubmit={handlePasswordChange}
          >
            <input
              type="password"
              placeholder="Mevcut Şifre"
              value={passwords.old}
              onChange={(e) =>
                setPasswords({ ...passwords, old: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Yeni Şifre"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Yeni Şifre (Tekrar)"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
            />
            <button type="submit">Şifreyi Değiştir</button>
            {pwError && (
              <div className={styles["profile-error"]}>{pwError}</div>
            )}
            {pwSuccess && (
              <div className={styles["profile-success"]}>{pwSuccess}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
