import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer-container">
      <p style={{ textAlign: "center", color: "var(--primary)", letterSpacing: "2px", margin: "auto"}}>© 2024 Souad Hassen</p>
      <div>
        <a
          className="social-link"
          href="https://github.com/Souad-HB?tab=repositories"
        >
          <FaGithub style={{ fontSize: "30px" }} />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/souad-salah/"
        >
          <FaLinkedin style={{ fontSize: "30px" }} />
        </a>

        <a className="social-link" href="https://x.com/Souad_Hassen">
          <FaTwitter style={{ fontSize: "30px" }} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
