import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.navigationSidebar}>
      <div className={styles.navigationItem}>
        <Link to="/projects" className={styles.navigationLink}>
          <img
            src={images.ProjectsIcon}
            alt="Kautsar's Projects"
            className={styles.navigationIcon}
          />
        </Link>
      </div>
      <div className={styles.navigationItem}>
        <Link to="/" className={styles.navigationLink}>
          <img
            src={images.HomeIcon}
            alt="Go to Home"
            className={styles.navigationIcon}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
