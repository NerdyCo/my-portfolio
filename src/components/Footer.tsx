import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="global-footer">
      <div className="footer-copyright">
        <p>© 2025 Kautsar. All rights reserved.</p>
      </div>
      <div className="footer-newsletter">
        <p>Stay updated with my latest projects!</p>
      </div>
    </footer>
  );
};

export default Footer;
