import React from "react";
import { images } from "../assets/images";

import "../styles/Contact.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Contact: React.FC = () => {
  return (
    <>
      <div className="contact">
        <p className="contact-header">CONTACT</p>

        <div className="contact-main-content">
          <div className="contact-intro">
            <p>
              Feel free to reach out <br />
              for any inquiries or <br />
              just to say hi!
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-field">
              <p className="contact-field-label">Full Name</p>
              <p className="contact-field-value">Kautsar Teguh Dwi Putra</p>
            </div>
            <div className="contact-field">
              <p className="contact-field-label">Phone Number</p>
              <p className="contact-field-value">+62 878 8638 1282</p>
            </div>
            <div className="contact-field">
              <p className="contact-field-label">Address</p>
              <p className="contact-field-value">
                Pesona Cinere Residence Block K.3 (Cluster Regina) Rt 05 Rw 10,
                Pancoran Mas, Kota Depok, Jawa Barat
              </p>
            </div>
            <div className="contact-field">
              <p className="contact-field-label">Email</p>
              <p className="contact-field-value">kautsarteguh13@gmail.com</p>
            </div>
            <div className="contact-social-media">
              <p className="contact-field-label">Social Media</p>
              <div className="contact-social-content">
                <a
                  href="https://instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.InstagramIcon}
                    alt="kautsar's instagram"
                    className="social-icon"
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
                    className="social-icon"
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
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
