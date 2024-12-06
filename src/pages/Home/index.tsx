import React, { useContext, useEffect, useState } from "react";
import { BackButton, Header, OptionCard, PlanCard } from "../../components";
import OptionForMeIcon from "../../assets/icons/option-for-me.svg";
import OptionSomeoneIcon from "../../assets/icons/option-for-someone.svg";
import PlanHomeIcon from "../../assets/icons/plan-home.svg";
import PlanClinicIcon from "../../assets/icons/plan-clinic.svg";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import useIsMobile from "../../hooks/useIsMobile";
import { Divider, LinearProgress } from "@mui/material";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { handleBack } from "../../utils/navigationUtils";
import { Plan } from "../../interfaces/plan.interface";
import { AppContext } from "../../context/AppContext";
import { getPlans } from "../../services/getPlansService";
import { calculateAge } from "../../utils/functions";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { user } = useContext(AppContext)!;
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setSelectedPlan } = useContext(AppContext)!;

  useEffect(() => {
    if (activeOption) {
      fetchPlans();
    }
  }, [activeOption]);

  const fetchPlans = async () => {
    try {
      setIsLoading(true);
      const allPlans = await getPlans();
      if (user?.birthDay) {
        const userAge = calculateAge(new Date(user.birthDay));
        const eligiblePlans = allPlans.filter((plan) => userAge <= plan.age);
        setFilteredPlans(eligiblePlans);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  const handleSelectPlan = (title: string, finalCost: number) => {
    setSelectedPlan({ title, finalCost });
    navigate("/summary");
  };

  return (
    <div className="home-page">
      <Header />
      {isMobile ? (
        <>
          <div
            style={{
              padding: 24,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <div
              onClick={() => handleBack(navigate)}
              className="back-button__icon-gray"
            >
              <img src={ArrowLeft} alt="Arrow Left" />
            </div>
            <span className="home-page__label">Paso 1 de 2</span>
            <div style={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={10}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#4F4FFF"
                  },
                  backgroundColor: "#D7DBF5"
                }}
              />
            </div>
          </div>
          <Divider />
        </>
      ) : (
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
      )}

      <main className="home-page__content">
        {!isMobile && <BackButton />}

        <div className="home-page__content-center">
          <div className="home-page__title-section">
            <h1 className="home-page__title-section-title">
              {user?.name} ¿Para quién deseas cotizar?
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

        {activeOption && (
          <div className="home-page__plans">
            {filteredPlans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.name}
                icon={
                  plan.name === "Plan en Casa y Clínica"
                    ? PlanClinicIcon
                    : PlanHomeIcon
                }
                currentCost={plan.price}
                benefits={plan.description.map((detail) => ({
                  title: detail.split(":")[0],
                  detail
                }))}
                isDiscounted={activeOption === "option-two"}
                onSelect={handleSelectPlan}
                loading={isLoading}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
