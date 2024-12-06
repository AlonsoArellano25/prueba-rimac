import React from "react";
import LogoDesktop from "../../assets/images/logo-white.png";
import LogoMobile from "../../assets/icons/logo-mobile..svg";
import "./Footer.scss";
import useIsMobile from "../../hooks/useIsMobile";
import { Divider } from "@mui/material";

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <footer className="footer">
      {isMobile ? (
        <img src={LogoMobile} alt="RIMAC Logo" className="footer__logo" />
      ) : (
        <img src={LogoDesktop} alt="RIMAC Logo" className="footer__logo" />
      )}
      {isMobile && <Divider className="footer__divider" />}
      <p className="footer__text">© 2023 RIMAC Seguros y Reaseguros.</p>
    </footer>
  );
};

export default Footer;
