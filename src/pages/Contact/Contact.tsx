import React from "react";
import { images } from "../../assets/images";

import styles from "./Contact.module.css";
import Sidebar from "../../components/Sidebar";

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <p className={styles.contactHeader}>CONTACT</p>

      <div className={styles.contactMainContent}>
        <div className={styles.contactIntro}>
          <p>
            Feel free to reach out <br className="break-line" />
            for any inquiries or <br className="break-line" />
            just to say hi!
          </p>
        </div>

        <div className={styles.contactDetails}>
          <div className={styles.contactField}>
            <p className={styles.contactFieldLabel}>Full Name</p>
            <p className={styles.contactFieldValue}>Kautsar Teguh Dwi Putra</p>
          </div>
          <div className={styles.contactField}>
            <p className={styles.contactFieldLabel}>Phone Number</p>
            <p className={styles.contactFieldValue}>+62 878 8638 1282</p>
          </div>
          <div className={styles.contactField}>
            <p className={styles.contactFieldLabel}>Address</p>
            <p className={styles.contactFieldValue}>
              Pesona Cinere Residence Block K.3 (Cluster Regina) Rt 05 Rw 10,
              Pancoran Mas, Kota Depok, Jawa Barat
            </p>
          </div>
          <div className={styles.contactField}>
            <p className={styles.contactFieldLabel}>Email</p>
            <p className={styles.contactFieldValue}>kautsarteguh13@gmail.com</p>
          </div>
          <div className={styles.contactSocialMedia}>
            <p className={styles.contactFieldLabel}>Social Media</p>
            <div className={styles.contactSocialContent}>
              <a
                href="https://instagram.com/your-profile"
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
                href="https://github.com/your-profile"
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
                href="https://linkedin.com/in/your-profile"
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
        <Sidebar />
      </div>
    </div>
  );
};

export default Contact;
