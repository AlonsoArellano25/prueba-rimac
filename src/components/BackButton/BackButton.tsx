import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import "./BackButton.scss";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="back-button" onClick={handleBack}>
      <div className="back-button__icon">
        <img src={ArrowLeft} alt="Arrow Left" />
      </div>
      <span className="back-button__text">Volver</span>
    </div>
  );
};

export default BackButton;
