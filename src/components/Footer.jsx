import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h2>Be the first to know!</h2>
          <p>Sign up for updates:</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="contact-box">
          <h2>Contact Us</h2>
          <p>Phone: +123 456 7890</p>
          <p>Customer Email: support@example.com</p>
          <label htmlFor="currency">Currency:</label>
          <select id="currency">
            <option value="EUR">Euros</option>
            <option value="USD">US Dollars</option>
            <option value="GBP">British Pounds</option>
          </select>
          <p className="currency-info">Transactions will be completed in Euros.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="additional-content">
          {/* Add your additional footer content here */}
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-section">
          <h2>Metta Muse</h2>
          <p>About Us</p>
          <p>Stories and Artisans</p>
          <p>Boutique</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <p>Order and Shipping</p>
          <p>Join/Login as Seller</p>
          <p>Payment & Pricing</p>
          <p>Return and Refund</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p><FaInstagram /> Instagram  <FaLinkedin /> LinkedIn</p>
          
          <p>mettā muse</p>
          <p>
            <img src="gpay.png" alt="GPay" /> 
            <img src="mastercard.png" alt="Mastercard" /> 
            <img src="paypal.png" alt="PayPal" /> 
            <img src="amex.png" alt="Amex" /> 
            <img src="applepay.png" alt="Apple Pay" />
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
