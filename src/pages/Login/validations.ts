import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  documentType: Yup.string()
    .oneOf(["DNI", "RUC"], "Seleccione un tipo de documento válido")
    .required("El tipo de documento es obligatorio"),
  documentNumber: Yup.string()
    .required("El número de documento es obligatorio")
    .test(
      "document-length",
      "El número de documento debe tener 8 dígitos si es DNI o 11 si es RUC",
      function (value) {
        const { documentType } = this.parent;
        if (documentType === "DNI") return value?.length === 8;
        if (documentType === "RUC") return value?.length === 11;
        return false;
      }
    ),
  phone: Yup.string()
    .length(9, "El celular debe tener 9 dígitos")
    .required("El celular es obligatorio"),
  acceptPrivacyPolicy: Yup.boolean()
    .oneOf([true], "Debe aceptar la Política de Privacidad")
    .required(),
  acceptCommercialPolicy: Yup.boolean()
    .oneOf([true], "Debe aceptar las Políticas de Comunicaciones Comerciales")
    .required()
});

export default validationSchema;
