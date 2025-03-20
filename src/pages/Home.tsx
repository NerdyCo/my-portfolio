import React from "react";
import HomeImage from "../assets/images/cat.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <img
        src={HomeImage}
        alt="Character Background"
        className="home-background-image"
      />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/" element={null} />
          <Route path="/contact" element={null} />
          <Route path="/extras" element={null} />
        </Routes>
      </Router>

      <div className="home-content-box">
        <p className="home-content-greeting">Hello There, I'm</p>
        <p className="home-content-name">KAUTSAR</p>
        <p className="home-content-brief-intro">
          JavaScript developer here—crafting efficient, secure systems with
          TypeScript magic, seamless algorithms, and eye-catching dynamic
          effects!
        </p>
        <div className="social-media"></div>
      </div>
    </div>
  );
};

export default Home;
