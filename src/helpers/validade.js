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
    confirmButtonText: "Ok",
  });
};

const signupSchema = yup.object().shape({
  email: yup.string().email().required("E-mail é um campo obrigatório"),
  name: yup.string().required("Nome completo é um campo obrigatório"),
  password: yup.string().required("Senha é um campo obrigatório"),
});

const signinSchema = yup.object().shape({
  email: yup.string().email().required("E-mail é um campo obrigatório"),
  password: yup.string().required("Senha é um campo obrigatório"),
});

const configurationSchema = yup.object().shape({
  appName: yup.string().required("Nome do aplicativo é um campo obrigatório"),
  webPush: yup.object().shape({
    siteName: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Nome do site é um campo obrigatório no WebPush");
    }),
    siteAddress: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Endereço do site é um campo obrigatório no WebPush");
    }),
    siteIcon: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Ícone do site é um campo obrigatório no WebPush");
    }),
    allowMessage: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Mensagem de permissão é um campo obrigatório no WebPush");
    }),
  }),
  email: yup.object().shape({
    smtpServer: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Servidor SMTP é um campo obrigatório no E-mail");
    }),
    sendPort: yup.object().when("on", (on) => {
      if (on)
        return yup.string().required("Porta é um campo obrigatório no E-mail");
    }),
    login: yup.object().when("on", (on) => {
      if (on)
        return yup.string().required("Login é um campo obrigatório no E-mail");
    }),
    password: yup.object().when("on", (on) => {
      if (on)
        return yup.string().required("Senha é um campo obrigatório no E-mail");
    }),
  }),
  sms: yup.object().shape({
    smsProvider: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Provedor SMS é um campo obrigatório no SMS");
    }),
    login: yup.object().when("on", (on) => {
      if (on)
        return yup.string().required("Login é um campo obrigatório no SMS");
    }),
    password: yup.object().when("on", (on) => {
      if (on)
        return yup.string().required("Senha é um campo obrigatório no SMS");
    }),
  }),
});

const notificationSchema = yup.object().shape({
  name: yup.string().required("Nome do aplicativo é um campo obrigatório"),
  appName: yup.string().required("Aplicativo é um campo obrigatório"),
  webPush: yup.object().shape({
    audience: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Pessoas para enviar é um campo obrigatório no WebPush");
    }),
    notificationTitle: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Titulo da notificação é um campo obrigatório no WebPush");
    }),
    icon: yup.object().when("on", (on) => {
      if (on)
        return yup.string().required("Ícone é um campo obrigatório no WebPush");
    }),
    link: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Link do destino é um campo obrigatório no WebPush");
    }),
    message: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Mensagem é um campo obrigatório no WebPush");
    }),
  }),
  email: yup.object().shape({
    email: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Lista de e-mail é um campo obrigatório no E-mail");
    }),
    message: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Mensagem é um campo obrigatório no E-mail");
    }),
  }),
  sms: yup.object().shape({
    phone: yup.object().when("on", (on) => {
      if (on)
        return yup
          .string()
          .required("Lista de telefone é um campo obrigatório no SMS");
    }),
    message: yup.object().when("on", (on) => {
      if (on)
        return yup.string().required("Mensagem é um campo obrigatório no SMS");
    }),
  }),
});

export {
  signupSchema,
  signinSchema,
  configurationSchema,
  handleMessage,
  notificationSchema,
};
