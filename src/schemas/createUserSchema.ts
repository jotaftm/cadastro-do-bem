import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  primaryName: yup.string().required("Nome é obrigatório!"),
  lastName: yup.string().required("Sobrenome é obrigatório!"),
  email: yup
    .string()
    .email("Formato inválido!")
    .required("Email é obrigatório!"),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "invalid cpf format")
    .required("CPF é obrigatório!"),
  birthDate: yup
    .string()
    .matches(
      /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
      "Formato inválido!"
    )
    .required("Data de nascimento é obrigatória!"),
  password: yup.string().required("Senha é obrigatória!"),
  address: yup.object().shape({
    zipCode: yup
      .string()
      .matches(/^\d{8}$/, "Formato inválido!")
      .required("CEP é obrigatório!"),
    publicPlace: yup.string().required("Rua é obrigatória!"),
    complement: yup.string(),
    district: yup.string().required("Bairro é obrigatório!"),
    city: yup.string().required("Cidade é obrigatória!"),
    state: yup
      .string()
      .matches(
        /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO|BR)$/,
        "Formato inválido!"
      )
      .required("Estado é obrigatório!"),
  }),
});
