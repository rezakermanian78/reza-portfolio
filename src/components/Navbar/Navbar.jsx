import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Resume", path: "/resume" },
  { title: "Projects", path: "/projects" },
  { title: "Research", path: "/research" },
  { title: "Trading", path: "/trading" },
  { title: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Reza<span>K.</span>
        </NavLink>

        <nav className={isOpen ? "navbar-links active" : "navbar-links"}>
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={closeMenu}>
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <NavLink to="/contact" className="navbar-cta">
            Let’s Talk
          </NavLink>

          <button
            className="navbar-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;