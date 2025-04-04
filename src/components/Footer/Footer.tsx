import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.globalFooter}>
      <div className={styles.footerCopyright}>
        <p>© 2025 All rights reserved.</p>
      </div>
      <div className={styles.footerNewsletter}>
        <p>Stay updated with my latest projects!</p>
      </div>
    </footer>
  );
};

export default Footer;
