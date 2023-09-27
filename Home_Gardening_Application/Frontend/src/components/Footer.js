import React from 'react';
import './Footer.css'; // Import your CSS file
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Home Gardening App" />
        </div>
        <div className="footer-contact">
          <p>Contact us:</p>
          <p>Email: info@homegardeningapp.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <p>Follow us:</p>
          <a href="https://www.facebook.com/homegardeningapp" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com/homegardeningapp" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com/homegardeningapp" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Home Gardening App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
