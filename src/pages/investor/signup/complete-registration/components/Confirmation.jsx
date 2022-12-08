import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Text,
} from "@chakra-ui/react";
import Button from "../../../../../components/Button";
import { navigateTo } from "../../../../../helpers/routes";

function Confirmation() {
  return (
    <Box mt={5} maxW={{ base: "100%", md: "80%", xl: "50%" }}>
      <Text>Você completou seu cadastro!</Text>

      <Text mt={3}>
        Lembrando, essas informações serão usadas em seu contrato ao cadastrar
        novos investimentos.
      </Text>

      <Alert
        mt={5}
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="left"
        justifyContent="center"
        textAlign="left"
      >
        <AlertTitle mb={1} fontSize="lg">
          Agora é simples, conte-nos sobre a sua idéia.
        </AlertTitle>
      </Alert>

      <Text mt={10}>
        Aproveite os nossos investidores, eles estão ansisos em saber sobre a
        sua idéia.
      </Text>

      <Text mt={10}>
        Acesse nosso cadastro de investimentos <b>no botão abaixo.</b>
      </Text>
      <Button
        onClick={() => navigateTo("/business/captar")}
        maxW={{ base: "80%", md: "40%" }}
        mt={2}
        text="Cadastrar investimento"
      />
    </Box>
  );
}

export default Confirmation;
