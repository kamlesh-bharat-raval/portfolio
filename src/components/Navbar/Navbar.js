import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" data-aos="fade-down">
      <h2 className="logo">Portfolio</h2>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links nav-active" : "nav-links"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setMenuOpen(false)}
            activeClass="active"

          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setMenuOpen(false)}
            activeClass="active"

          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setMenuOpen(false)}
            activeClass="active"

          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setMenuOpen(false)}
            activeClass="active"

          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setMenuOpen(false)}
            activeClass="active"

          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
