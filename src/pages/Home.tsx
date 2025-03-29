import React from "react";
import { images } from "../assets/images/index";

import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <img
        src={images.Doodle}
        alt="Background Doodle"
        className="background-doodle"
      />

      <div className="footer">
        <div className="footer-details">
          <p className="footer-title">KAUTSAR</p>
          <p className="footer-intro">
            Developer here—crafting efficient, secure systems with <br />
            TypeScript magic, seamless algorithms, and <br /> eye-catching
            dynamic effects!
          </p>
          <a
            href="./assets/files/kautsar_cv.pdf"
            className="btn-cv"
            download="Kautsar_CV.pdf"
          >
            Peek my CV
          </a>
        </div>

        <div className="footer-navigation">
          <a href="#" className="nav-item">
            Projects
          </a>
          <a href="#" className="nav-item">
            Contact
          </a>
        </div>

        <div className="social-media">
          <a
            href="https://www.instagram.com/kautsarteguh/"
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
            href="https://github.com/NerdyCo"
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
            href="https://www.linkedin.com/in/kautsarteguh/"
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
  );
};

export default Home;
