import React from "react";
import "./OptionCard.scss";

interface OptionCardProps {
  icon: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  icon,
  title,
  description,
  isActive,
  onClick
}) => {
  return (
    <div
      className={`option-card ${isActive ? "option-card--active" : ""}`}
      onClick={onClick}
    >
      <div
        className={`option-card__status ${
          isActive ? "option-card__status--active" : ""
        }`}
      >
        {isActive && <span className="option-card__status__check">✔</span>}
      </div>
      <img src={icon} alt={title} className="option-card__icon" />
      <span className="option-card__title">{title}</span>
      <span className="option-card__description">{description}</span>
    </div>
  );
};

export default OptionCard;
