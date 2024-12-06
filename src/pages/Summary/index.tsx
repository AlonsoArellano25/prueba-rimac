import React, { useContext } from "react";
import "./Summary.scss";
import { BackButton, Header } from "../../components";
import UsersIcon from "../../assets/icons/users.svg";
import { Divider } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import { handleBack } from "../../utils/navigationUtils";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { AppContext } from "../../context/AppContext";

const Summary: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { user, selectedPlan } = useContext(AppContext)!;
  return (
    <div className="summary-page">
      <Header />
      {!isMobile && (
        <div className="summary-page__progress-bar">
          <div className="summary-page__step-group">
            <div className="summary-page__step ">
              <span>1</span>
            </div>
            <span className="summary-page__step-title ">
              Planes y coberturas
            </span>
          </div>
          <div className="summary-page__progress">
            <div className="summary-page__progress-bar-segment" />
            <div className="summary-page__progress-bar-segment" />
            <div className="summary-page__progress-bar-segment" />
            <div className="summary-page__progress-bar-segment" />
          </div>
          <div className="summary-page__step-group">
            <div className="summary-page__step summary-page__step--active">
              <span>2</span>
            </div>
            <span className="summary-page__step-title summary-page__step-title--active">
              Resumen
            </span>
          </div>
        </div>
      )}

      <main className="summary-page__content">
        {!isMobile && <BackButton />}

        {isMobile ? (
          <div className="summary-page__row">
            <div
              onClick={() => handleBack(navigate)}
              className="back-button__icon-gray"
            >
              <img src={ArrowLeft} alt="Arrow Left" />
            </div>
            <span className="summary-page__title">Resumen del seguro </span>
          </div>
        ) : (
          <span className="summary-page__title">Resumen del seguro </span>
        )}

        <div className={"summary-page__card"}>
          <span className={"summary-page__card__title"}>
            Precios calculados para:
          </span>
          <div className={"summary-page__card__container"}>
            <img src={UsersIcon} alt="users" />
            <span className={"summary-page__card__name"}>
              {user?.name} {user?.lastName}
            </span>
          </div>
          <Divider />
          <span className={"summary-page__card__subtitle"}>
            Responsable de pago
          </span>
          <span className={"summary-page__card__text"}>
            {user?.documentType}: {user?.documentNumber}
          </span>
          <span className={"summary-page__card__text"}>
            Celular: {user?.phone}
          </span>
          <br />
          <span className={"summary-page__card__subtitle"}>Plan elegido</span>
          <span className={"summary-page__card__text"}>
            {selectedPlan?.title}
          </span>
          <span className={"summary-page__card__text"}>
            Costo del Plan: ${selectedPlan?.finalCost.toFixed(2)} al mes
          </span>
        </div>
      </main>
    </div>
  );
};

export default Summary;
