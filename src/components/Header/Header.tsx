import React from "react";
import Logo from "../../assets/images/logo-red.png";
import TelephoneIcon from "../../assets/icons/telephone.svg";
import useIsMobile from "../../hooks/useIsMobile";
import "./Header.scss";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="RIMAC Logo" />
      </div>
      <div className="header__info">
        {!isMobile && <span>¡Compra por este medio!</span>}
        <span className="header__info__phone-icon">
          <img src={TelephoneIcon} alt="Phone Icon" />
        </span>
        <a href="tel:014116001" className="header__phone">
          (01) 411 6001
        </a>
      </div>
    </header>
  );
};

export default Header;
