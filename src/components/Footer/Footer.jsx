import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              Reza<span>K.</span>
            </h2>

            <p>
              AI & Backend Engineer focused on intelligent systems,
              scalable architecture, modern web platforms,
              and research-driven development.
            </p>

          </div>

          <div className="footer-links">

            <div className="footer-column">

              <h3>Navigation</h3>

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>

            </div>

            <div className="footer-column">

              <h3>Professional</h3>

              <Link to="/research">Research</Link>
              <Link to="/trading">Trading</Link>
              <Link to="/contact">Contact</Link>

            </div>

            <div className="footer-column">

              <h3>Connect</h3>

              <a
                href="mailto:reza.kermanian99@gmail.com"
              >
                Email
              </a>

              <a
                href="https://github.com/rezakermanian78"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/reza-kermanian-b5612034b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="footer-socials">

            <a
              href="mailto:reza.kermanian99@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/rezakermanian78"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/reza-kermanian-b5612034b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/989330077697"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/*
            Future Links:

            Twitter
            Telegram
            Medium
            ResearchGate
            ORCID
            Kaggle
            LeetCode
            */}

          </div>

          <p>
            © 2026 Reza Kermanian. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;