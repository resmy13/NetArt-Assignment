import React from 'react';
import './Footer.css'; // Import your CSS file for footer styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <FontAwesomeIcon icon={faPhone} className="footer-icon" />
        <p style={{ fontFamily: 'Times New Roman' }}>Toll free <b>1800 200 1234</b></p>
      </div>
      <div className="footer-item">
        <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
        <p style={{ fontFamily: 'Times New Roman' }}>www.facebook.com/cripumps</p>
      </div>
      <div className="footer-item">
        <FontAwesomeIcon icon={faGlobe} className="footer-icon" />
        <p style={{ fontFamily: 'Times New Roman' }}>www.crigroups.com</p>
      </div>
     
    </footer>
  );
}

export default Footer;