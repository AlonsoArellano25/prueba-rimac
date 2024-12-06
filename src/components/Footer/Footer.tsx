import React from "react";
import Logo from "../../assets/images/logo-white.png";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="RIMAC Logo" className="footer__logo" />
      <p className="footer__text">© 2023 RIMAC Seguros y Reaseguros.</p>
    </footer>
  );
};

export default Footer;
