import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SpecialitySection from "../../components/SpecialitySection/SpecialitySection";
import TopDoctorsSection from "../../components/TopDoctorsSection/TopDoctorsSection";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

/**
 * HomePage component is the main landing page, showing hero, specialties, and top doctors.
 */
const HomePage = () => {
  return (
    <div className={styles["home-container"]}>
      <Navbar />
      <HeroBanner />
      <SpecialitySection />
      <TopDoctorsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
