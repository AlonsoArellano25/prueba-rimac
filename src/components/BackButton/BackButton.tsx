import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import "./BackButton.scss";
import { handleBack } from "../../utils/navigationUtils";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="back-button" onClick={() => handleBack(navigate)}>
      <div className="back-button__icon">
        <img src={ArrowLeft} alt="Arrow Left" />
      </div>
      <span className="back-button__text">Volver</span>
    </div>
  );
};

export default BackButton;
