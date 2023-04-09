import React from "react";
import "../Scss/style.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footermain container">
        <div className="footer_icons">
          <div>
          <i class="fa-solid fa-house"></i>
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
            <li>Yeni</li>
            <li>Endirimlər</li>
            <li>Aksessuarlar</li>
            <li>Bütün brendlər</li>
          </ul>
        </div>
        <div className="footer_help">
          <h3>Kömək</h3>
          <ul>
            <li>Tez-tez soruşulan suallar</li>
            <li>Çatdirilma xidməti</li>
            <li>Geri qaytarilma şərtləri</li>
          </ul>
        </div>
        <div className="footer_connect">
          <h3>Əlaqə</h3>
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
          <span>©</span>PeojectX 2021. Bütün hüquqlar qorunur.
        </span>
        <div>
          <span>Qaydalar və şərtlər</span>
          <span>Məxfilik siyasəti</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
