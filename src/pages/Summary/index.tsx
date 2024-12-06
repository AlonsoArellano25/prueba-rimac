import React from "react";
import "./Summary.scss";
import { BackButton, Header } from "../../components";
import UsersIcon from "../../assets/icons/users.svg";
import { Divider } from "@mui/material";

const Summary: React.FC = () => {
  return (
    <div className="summary-page">
      <Header />
      <div className="summary-page__progress-bar">
        <div className="summary-page__step-group">
          <div className="summary-page__step ">
            <span>1</span>
          </div>
          <span className="summary-page__step-title ">Planes y coberturas</span>
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
      <main className="summary-page__content">
        <BackButton />
        <span className="summary-page__title">Resumen del seguro </span>
        <div className={"summary-page__card"}>
          <span className={"summary-page__card__title"}>
            Precios calculados para:
          </span>
          <div className={"summary-page__card__container"}>
            <img src={UsersIcon} alt="users" />
            <span className={"summary-page__card__name"}>
              Rocio Miranda Díaz
            </span>
          </div>
          <Divider />
          <span className={"summary-page__card__subtitle"}>
            Responsable de pago
          </span>
          <span className={"summary-page__card__text"}>DNI: 444888888</span>
          <span className={"summary-page__card__text"}>
            Celular: 5130216147
          </span>
          <br />
          <span className={"summary-page__card__subtitle"}>Plan elegido</span>
          <span className={"summary-page__card__text"}>
            Plan en Casa y Clínica
          </span>
          <span className={"summary-page__card__text"}>
            Costo del Plan: $99 al mes
          </span>
        </div>
      </main>
    </div>
  );
};

export default Summary;
