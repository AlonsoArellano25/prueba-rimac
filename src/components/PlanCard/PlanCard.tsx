import React from "react";
import { Button } from "../../components";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import "./PlanCard.scss";
import useIsMobile from "../../hooks/useIsMobile";

interface PlanCardProps {
  title?: string;
  icon?: string;
  currentCost?: number;
  benefits?: { title: string; detail: string }[];
  onSelect: (title: string, finalCost: number) => void;
  isDiscounted?: boolean;
  loading?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  icon,
  currentCost,
  benefits,
  onSelect,
  isDiscounted = false,
  loading = false
}) => {
  const discountedCost = currentCost
    ? (currentCost * 0.95).toFixed(2)
    : undefined;

  const isMobile = useIsMobile();

  const finalCost = isDiscounted ? currentCost! * 0.95 : currentCost;

  if (loading) {
    return (
      <div className="plan-card">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={index}
            variant={index < 5 ? "text" : "rectangular"}
            width={isMobile ? "100%" : 200}
            height={index < 5 ? 20 : 400}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="plan-card">
      {title === "Plan en Casa y Clínica" ? (
        <div>
          <div className="plan-card__tag">
            <span>Plan recomendado</span>
          </div>
        </div>
      ) : (
        <div className="plan-card__empty" />
      )}

      <div className="plan-card__header">
        <span className="plan-card__title">{title}</span>
        <img src={icon} alt={title} className="plan-card__icon" />
      </div>
      <span className="plan-card__subtitle">COSTO DEL PLAN</span>
      {isDiscounted && currentCost && (
        <span className="plan-card__previous-cost">
          ${currentCost.toFixed(2)}
        </span>
      )}
      <span className="plan-card__current-cost">
        $
        {isDiscounted && discountedCost
          ? discountedCost
          : currentCost?.toFixed(2)}{" "}
        al mes
      </span>
      <Divider style={{ margin: "20px 0" }} />
      <ul className="plan-card__benefits">
        {benefits?.map((benefit, index) => (
          <div key={index}>
            <li key={index} className="plan-card__benefit">
              <span className="plan-card__benefits__benefit-title">
                {benefit.title}
              </span>
              <br />
              <span className="plan-card__benefits__benefit-detail">
                {benefit.detail}
              </span>
            </li>
            <br />
          </div>
        ))}
      </ul>
      <div className="plan-card__button-container">
        <Button
          backgroundColor="#FF1C44"
          label="Seleccionar Plan"
          fullWidth
          onClick={() => onSelect(title!, finalCost!)}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default PlanCard;
