import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Geeks Institute is a collaborative space for tech learners and innovators. We offer hands-on training, mentorship, and project-based learning in programming, web development, and digital technologies.
                     Join us to build your future with code.
                     Geeks Institute – Empowering future developers through practical coding and innovation.</p>
        <ul className="footer-links">
          <li>
            <a href="https://web.facebook.com/people/Geeksinstitute/61571584975161/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/geeks.institute/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/zaarouri/GeeksBlogs_frontend" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i> WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
