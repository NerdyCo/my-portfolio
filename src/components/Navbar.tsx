import React from "react";
import { Link } from "react-router-dom";
import CircleCat from "../assets/images/circle-cat.png";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/"}>
            <img src={CircleCat} alt="Cat Logo" width="30px" />
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/extras"}>Extras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
