import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

export const signInFormYupSchema = Yup.object().shape({
  email: Yup.string().required("Este campo es requerido"),
  password: Yup.string().required("Este campo es requerido"),
});

export const signInFormYupResolver = yupResolver(signInFormYupSchema);
export type FormType = Yup.InferType<typeof signInFormYupSchema>;
