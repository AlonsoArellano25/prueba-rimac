import { Button, Footer, Header } from "../../components";
import Family from "../../assets/images/family.png";
import BlurAsset1 from "../../assets/images/blur-asset-1.png";
import BlurAsset2 from "../../assets/images/blur-asset-2.png";
import BlurAsset1Mobile from "../../assets/images/blur-asset-1-mobile.png";
import BlurAsset2Mobile from "../../assets/images/blur-asset-2-mobile.png";
import { Select, MenuItem, InputBase, Divider, Checkbox } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import useIsMobile from "../../hooks/useIsMobile";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validations";
import { AppContext } from "../../context/AppContext";
import { getUserData } from "../../services/getUserService";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { setUser } = useContext(AppContext)!;
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    documentType: "DNI",
    documentNumber: "",
    phone: "",
    acceptPrivacyPolicy: false,
    acceptCommercialPolicy: false
  };

  const handleUserLogin = async (values: typeof initialValues) => {
    setIsLoading(true);
    try {
      const userData = await getUserData();
      const enrichedUserData = {
        name: userData.name,
        lastName: userData.lastName,
        birthDay: userData.birthDay,
        documentType: values.documentType,
        documentNumber: values.documentNumber,
        phone: values.phone
      };
      setUser(enrichedUserData);
      navigate("/home");
    } catch (error) {
      console.error("Failed to fetch user data", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Header />
      <main className="login-page__content">
        <div className="login-page__grid">
          {!isMobile && (
            <div className="login-page__image" style={{ gridColumn: "1 / 7" }}>
              <img src={Family} alt="Family" />
            </div>
          )}
          <div
            className="login-page__form"
            style={{ gridColumn: isMobile ? "1 / -1" : "7 / -1" }}
          >
            {isMobile ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
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
                <h2 className="login-page__title">
                  Creado para ti y tu familia
                </h2>
              </>
            )}

            {isMobile && <Divider className="login-page__divider" />}

            <p className="login-page__description">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleUserLogin}
            >
              {({ values, handleChange }) => (
                <Form className="login-page__form-content">
                  <div className="login-page__input-group">
                    <Field
                      as={Select}
                      name="documentType"
                      value={values.documentType}
                      onChange={handleChange}
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
                    </Field>
                    <Field
                      as={InputBase}
                      name="documentNumber"
                      placeholder="Nro. de documento"
                      className="login-page__input"
                      value={values.documentNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <ErrorMessage
                    name="documentNumber"
                    component="div"
                    className="error"
                  />
                  <div className="login-page__input-group">
                    <Field
                      as={InputBase}
                      name="phone"
                      placeholder="Celular"
                      className="login-page__input login-page__input--full"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                  <div className="login-page__checkbox-group">
                    <Field
                      as={Checkbox}
                      name="acceptPrivacyPolicy"
                      type="checkbox"
                      sx={{
                        "&.Mui-checked": {
                          color: "black"
                        }
                      }}
                    />
                    <label
                      className="login-page__checkbox-label"
                      htmlFor="acceptPrivacyPolicy"
                    >
                      Acepto la Política de Privacidad
                    </label>
                  </div>
                  <ErrorMessage
                    name="acceptPrivacyPolicy"
                    component="div"
                    className="error"
                  />
                  <div className="login-page__checkbox-group">
                    <Field
                      as={Checkbox}
                      name="acceptCommercialPolicy"
                      type="checkbox"
                      sx={{
                        "&.Mui-checked": {
                          color: "black"
                        }
                      }}
                    />
                    <label
                      className="login-page__checkbox-label"
                      htmlFor="acceptCommercialPolicy"
                    >
                      Acepto la Política Comunicaciones Comerciales
                    </label>
                  </div>
                  <ErrorMessage
                    name="acceptCommercialPolicy"
                    component="div"
                    className="error"
                  />
                  <p className="login-page__terms">
                    <a href="/">Aplican Términos y Condiciones.</a>
                  </p>
                  <div>
                    <Button
                      type="submit"
                      label="Cotiza aquí"
                      backgroundColor={"#03050f"}
                      isLoading={isLoading}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>

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
      <Footer />
    </div>
  );
};

export default Login;
