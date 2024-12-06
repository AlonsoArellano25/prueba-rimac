import React, { useState } from "react";
import { BackButton, Header, OptionCard, PlanCard } from "../../components";
import OptionForMeIcon from "../../assets/icons/option-for-me.svg";
import OptionSomeoneIcon from "../../assets/icons/option-for-someone.svg";
import PlanHomeIcon from "../../assets/icons/plan-home.svg";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleSelectPlan = () => {
    navigate("/summary");
  };

  return (
    <div className="home-page">
      <Header />
      <div className="home-page__progress-bar">
        <div className="home-page__step-group">
          <div className="home-page__step home-page__step--active">
            <span>1</span>
          </div>
          <span className="home-page__step-title home-page__step-title--active">
            Planes y coberturas
          </span>
        </div>
        <div className="home-page__progress">
          <div className="home-page__progress-bar-segment" />
          <div className="home-page__progress-bar-segment" />
          <div className="home-page__progress-bar-segment" />
          <div className="home-page__progress-bar-segment" />
        </div>
        <div className="home-page__step-group">
          <div className="home-page__step">
            <span className="home-page__label">2</span>
          </div>
          <span className="home-page__step-title">Resumen</span>
        </div>
      </div>
      <main className="home-page__content">
        <BackButton />
        <div className="home-page__content-center">
          <div className="home-page__title-section">
            <h1 className="home-page__title-section-title">
              Rocío ¿Para quién deseas cotizar?
            </h1>
            <p className="home-page__title-section-subtitle">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>
          <div className="home-page__options">
            <OptionCard
              icon={OptionForMeIcon}
              title="Para mi"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              isActive={activeOption === "option-one"}
              onClick={() => setActiveOption("option-one")}
            />
            <OptionCard
              icon={OptionSomeoneIcon}
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o cualquier persona."
              isActive={activeOption === "option-two"}
              onClick={() => setActiveOption("option-two")}
            />
          </div>
        </div>

        <div className="home-page__plans">
          <PlanCard
            title="Plan en Casa"
            icon={PlanHomeIcon}
            currentCost="$37.05 al mes"
            benefits={[
              {
                title: "Médico general a domicilio",
                detail: "por S/20 y medicinas cubiertas al 100%."
              },
              {
                title: "Videoconsulta",
                detail:
                  "y orientación telefónica al 100% en medicina general + pediatría."
              },
              {
                title: "Indemnización",
                detail: "de S/300 en caso de hospitalización por más de un día."
              }
            ]}
            previousCost="$39 antes"
            onSelect={handleSelectPlan}
          />
          <PlanCard
            title="Plan en Casa"
            icon={PlanHomeIcon}
            currentCost="$37.05 al mes"
            benefits={[
              {
                title: "Médico general a domicilio",
                detail: "por S/20 y medicinas cubiertas al 100%."
              },
              {
                title: "Videoconsulta",
                detail:
                  "y orientación telefónica al 100% en medicina general + pediatría."
              },
              {
                title: "Indemnización",
                detail: "de S/300 en caso de hospitalización por más de un día."
              }
            ]}
            previousCost="$39 antes"
            onSelect={handleSelectPlan}
          />
          <PlanCard
            title="Plan en Casa"
            icon={PlanHomeIcon}
            currentCost="$37.05 al mes"
            benefits={[
              {
                title: "Médico general a domicilio",
                detail: "por S/20 y medicinas cubiertas al 100%."
              },
              {
                title: "Videoconsulta",
                detail:
                  "y orientación telefónica al 100% en medicina general + pediatría."
              },
              {
                title: "Indemnización",
                detail: "de S/300 en caso de hospitalización por más de un día."
              }
            ]}
            previousCost="$39 antes"
            onSelect={handleSelectPlan}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
