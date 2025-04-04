import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";

import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.leftNavbarList}>
          <img
            src={images.PortfolioIcon}
            alt="kautsar's portfolio"
            className={styles.navPortfolioIcon}
          />
          <p>Portfolio</p>
        </li>
        <li className={styles.centerNavbarList}>
          <Link to={"/"}>
            <img
              src={images.CircleCat}
              alt="Cat Logo"
              width="30px"
              className={styles.navCatLogo}
            />
          </Link>
        </li>
        <li className={styles.rightNavbarList}>
          <p>Dev</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
