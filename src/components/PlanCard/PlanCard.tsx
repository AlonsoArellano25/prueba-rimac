import React from "react";
import { Button } from "../../components";
import Divider from "@mui/material/Divider";
import "./PlanCard.scss";
interface PlanCardProps {
  title: string;
  icon: string;
  currentCost: string;
  benefits: { title: string; detail: string }[];
  previousCost?: string;
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  icon,
  currentCost,
  benefits,
  previousCost,
  onSelect
}) => {
  return (
    <div className="plan-card">
      <div className="plan-card__header">
        <span className="plan-card__title">{title}</span>
        <img src={icon} alt={title} className="plan-card__icon" />
      </div>
      <span className="plan-card__subtitle">COSTO DEL PLAN</span>
      {previousCost && (
        <span className="plan-card__previous-cost">{previousCost}</span>
      )}
      <span className="plan-card__current-cost">{currentCost}</span>
      <Divider style={{ margin: "20px 0" }} />
      <ul className="plan-card__benefits">
        {benefits.map((benefit, index) => (
          <li key={index} className="plan-card__benefit">
            <span className="plan-card__benefits__benefit-title">
              {benefit.title}
            </span>
            <br />
            <span className="plan-card__benefits__benefit-detail">
              {benefit.detail}
            </span>
          </li>
        ))}
      </ul>
      <Button
        backgroundColor="#FF1C44"
        label="Seleccionar Plan"
        fullWidth
        onClick={onSelect}
      />
    </div>
  );
};

export default PlanCard;
