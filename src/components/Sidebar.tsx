import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="navigation-sidebar">
      <div className="navigation-item">
        <Link to="/projects" className="navigation-link">
          <img
            src={images.ProjectsIcon}
            alt="Kautsar's Projects"
            className="navigation-icon"
          />
        </Link>
      </div>
      <div className="navigation-item">
        <Link to="/" className="navigation-link">
          <img
            src={images.HomeIcon}
            alt="Go to Home"
            className="navigation-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
