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
            JavaScript developer here—crafting efficient, secure systems with{" "}
            <br />
            TypeScript magic, seamless algorithms, and <br /> eye-catching
            dynamic effects!
          </p>
          <a href="#" className="btn-cv">
            Peek my CV
          </a>
        </div>

        <div className="footer-navigation">
          <a href="#" className="nav-item">
            About
          </a>
          <a href="#" className="nav-item">
            Projects
          </a>
          <a href="#" className="nav-item">
            Contact
          </a>
          <a href="#" className="nav-item">
            Extra
          </a>
        </div>

        <div className="social-media">
          <img
            src={images.InstagramIcon}
            alt="kautsar's instagram"
            className="social-icon"
          />
          <img
            src={images.GithubIcon}
            alt="kautsar's github"
            className="social-icon"
          />
          <img
            src={images.LinkedinIcon}
            alt="kautsar's linkedin"
            className="social-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
