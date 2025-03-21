import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="left-navbar-list">
          <img
            src={images.PortfolioIcon}
            alt="kautsar's portfolio"
            className="nav-portfolio-icon"
          />
          <p>Portfolio</p>
        </li>
        <li className="center-navbar-list">
          <Link to={"/"}>
            <img
              src={images.CircleCat}
              alt="Cat Logo"
              width="30px"
              className="nav-cat-logo"
            />
          </Link>
        </li>
        <li className="right-navbar-list">
          <p>Dev</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
