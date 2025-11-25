import React from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Your Name | All Rights Reserved
      </p>

      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={scrollTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
