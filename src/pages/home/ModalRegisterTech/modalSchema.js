import * as yup from "yup";

export const modalSchema = yup.object().shape({
  title: yup
    .string()
    .required("Nome da tecnologia obrigatório")
    .min(2, "minimo 2 caracteres"),
});
