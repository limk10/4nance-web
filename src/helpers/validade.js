import * as yup from "yup";
import Swal from "sweetalert2";

yup.setLocale({
  string: {
    email: "Preencha um email válido",
    min: "${path}: valor muito curto (mí­nimo ${min} caracteres)",
    max: "${path}: valor muito longo (máximo ${max} caracteres)",
    matches: "${path}: valor inválido, verifique o formato esperado",
    length: "${path}: deve conter exatamente ${length} caracteres",
  },
  mixed: {
    required: "${path} é um campo obrigatório",
    oneOf: "${path} deve ser um dos seguintes valores [${values}]",
  },
});

const handleMessage = (errors) => {
  let message = "";
  errors.map((err) => (message += `${err}; </br>`));

  Swal.fire({
    title: "Ops...",
    html: message,
    icon: "error",
    confirmButtonText: "Ok!",
    confirmButtonColor: "#3085d6",
  });
};

const captureEmployeeSchema = yup.object().shape({
  doc: yup.string().required("<b>CNPJ</b> é um campo obrigatório"),
  fantasyName: yup
    .string()
    .required("<b>Nome fantasia</b> é um campo obrigatório"),
  fundationDate: yup
    .string()
    .required("<b>Data de fundação</b> é um campo obrigatório"),
  patrimony: yup.string().required("<b>Patrimônio</b> é um campo obrigatório"),
  social: yup.string().required("<b>Razão social</b> é um campo obrigatório"),
  state: yup.string().required("<b>Estado</b> é um campo obrigatório"),
  zipCode: yup.string().required("<b>CEP</b> é um campo obrigatório"),
});

const captureOperationSchema = yup.object().shape({
  operation: yup
    .string()
    .required("<b>Nome da operação</b> é um campo obrigatório"),
  value: yup
    .string()
    .required("<b>Valor que deseja captar</b> é um campo obrigatório"),
  description: yup.string().required("<b>Descrição</b> é um campo obrigatório"),
  type: yup
    .string()
    .required("<b>Formato da operação</b> é um campo obrigatório"),
});

export { captureEmployeeSchema, captureOperationSchema, handleMessage };
