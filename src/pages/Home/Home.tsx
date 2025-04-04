import React from "react";
import { images } from "../../assets/images";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <img
        src={images.Doodle}
        alt="Background Doodle"
        className={styles.backgroundDoodle}
      />

      <div className={styles.homeFooter}>
        <div className={styles.footerDetails}>
          <p className={styles.footerTitle}>KAUTSAR</p>
          <p className={styles.footerIntro}>
            Developer here—crafting efficient, secure systems with{" "}
            <br className="break-line" />
            TypeScript magic, seamless algorithms, and{" "}
            <br className="break-line" /> eye-catching dynamic effects!
          </p>
          <a
            href="./assets/files/kautsar_cv.pdf"
            className={styles.btnCv}
            download="Kautsar_CV.pdf"
          >
            Peek my CV
          </a>
        </div>

        <div className={styles.footerNavigation}>
          <Link to="/projects" className={styles.navItem}>
            Projects
          </Link>
          <Link to="/contact" className={styles.navItem}>
            Contact
          </Link>
        </div>

        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com/kautsarteguh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={images.InstagramIcon}
              alt="kautsar's instagram"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://github.com/NerdyCo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={images.GithubIcon}
              alt="kautsar's github"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kautsarteguh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={images.LinkedinIcon}
              alt="kautsar's linkedin"
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
