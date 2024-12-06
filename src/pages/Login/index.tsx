import { Button, Footer, Header } from "../../components";
import Family from "../../assets/images/family.png";
import BlurAsset1 from "../../assets/images/blur-asset-1.png";
import BlurAsset2 from "../../assets/images/blur-asset-2.png";
import BlurAsset1Mobile from "../../assets/images/blur-asset-1-mobile.png";
import BlurAsset2Mobile from "../../assets/images/blur-asset-2-mobile.png";
import {
  Select,
  MenuItem,
  InputBase,
  SelectChangeEvent,
  Divider
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import useIsMobile from "../../hooks/useIsMobile";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [documentType, setDocumentType] = useState("DNI");

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setDocumentType(event.target.value);
  };
  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="login-page">
      <Header />
      <main className="login-page__content">
        {!isMobile && (
          <div className="login-page__image">
            <img src={Family} alt="Family" />
          </div>
        )}
        <div className="login-page__form">
          {isMobile ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <div className="login-page__tag">Seguro Salud Flexible</div>
                <h2 className="login-page__title">
                  Creado para ti y tu familia
                </h2>
              </div>
              <div className="login-page__image">
                <img src={Family} alt="Family" />
              </div>
            </div>
          ) : (
            <>
              <div className="login-page__tag">Seguro Salud Flexible</div>
              <h2 className="login-page__title">Creado para ti y tu familia</h2>
            </>
          )}

          {isMobile && <Divider className="login-page__divider" />}

          <p className="login-page__description">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
          <form className="login-page__form-content">
            <div className="login-page__input-group">
              <Select
                value={documentType}
                onChange={handleTypeChange}
                className="login-page__dropdown"
                displayEmpty
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#5e6488"
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#5e6488"
                  }
                }}
              >
                <MenuItem value="DNI">DNI</MenuItem>
                <MenuItem value="RUC">RUC</MenuItem>
              </Select>
              <InputBase
                placeholder="Nro. de documento"
                className="login-page__input"
              />
            </div>
            <InputBase
              placeholder="Celular"
              className="login-page__input login-page__input--full"
            />
            <div className="login-page__checkbox-group">
              <input
                type="checkbox"
                id="privacy-policy"
                className="login-page__checkbox"
              />
              <label
                htmlFor="privacy-policy"
                className="login-page__checkbox-label"
              >
                Acepto la Política de Privacidad
              </label>
            </div>
            <div className="login-page__checkbox-group">
              <input
                type="checkbox"
                id="commercial-policy"
                className="login-page__checkbox"
              />
              <label
                htmlFor="commercial-policy"
                className="login-page__checkbox-label"
              >
                Acepto la Política Comunicaciones Comerciales
              </label>
            </div>
            <p className="login-page__terms">
              <a href="/">Aplican Términos y Condiciones.</a>
            </p>
          </form>

          <Button
            onClick={handleButtonClick}
            label="Cotiza aquí"
            backgroundColor={"#03050f"}
          />
        </div>
      </main>
      <Footer />
      {isMobile ? (
        <>
          <img
            src={BlurAsset1Mobile}
            alt="BlurAsset1"
            className="login-page__blur-asset-1-mobile"
          />
          <img
            src={BlurAsset2Mobile}
            alt="BlurAsset2"
            className="login-page__blur-asset-2-mobile"
          />
        </>
      ) : (
        <>
          <img
            src={BlurAsset1}
            alt="BlurAsset1"
            className="login-page__blur-asset-1"
          />
          <img
            src={BlurAsset2}
            alt="BlurAsset2"
            className="login-page__blur-asset-2"
          />
        </>
      )}
    </div>
  );
};

export default Login;
