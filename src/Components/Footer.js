import React from "react";
import "../Scss/style.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footermain container">
        <div className="footer_icons">
          <div>
            <i className="fa-solid fa-house"></i>
            <span>Project</span>
          </div>
          <div>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <div className="footer_menu">
          <h3>Menu</h3>
          <ul>
            <li>New</li>
            <li>Discounts</li>
            <li>Accesories</li>
            <li>All brands</li>
          </ul>
        </div>
        <div className="footer_help">
          <h3>Help</h3>
          <ul>
            <li>Frequently asked questions</li>
            <li>Delivery service</li>
            <li>Refund information</li>
          </ul>
        </div>
        <div className="footer_connect">
          <h3>Contact</h3>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>M. K. Ataturk avenue 89, Baku, Azerbaijan</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>example@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>*2108</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footerbottom container">
        <span>
          <span>©</span>PeojectX 2021. All rights reserved.
        </span>
        <div>
          <span>Terms and conditions</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
