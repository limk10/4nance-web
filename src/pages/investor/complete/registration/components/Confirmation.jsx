import { Alert, AlertTitle, Box, Text } from "@chakra-ui/react";
import Button from "../../../../../components/Button";
import { navigateTo } from "../../../../../helpers/routes";

function Confirmation() {
  return (
    <Box mt={5} maxW={{ base: "100%", md: "80%", xl: "50%" }}>
      <Text>Você completou seu cadastro!</Text>

      <Text mt={3}>
        Lembrando, essas informações serão usadas em seu contrato ao realizar a
        reserva em um de nossos investimentos escolhidos.
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
          Agora é só aproveitar as nossas opções de investimentos
        </AlertTitle>
      </Alert>

      <Text mt={10}>
        Agora é simples, identificamos seu perfil e estamos te mandando os
        melhores investimentos alteranativos do mercado, todos investimentos
        reais!
      </Text>

      <Text mt={10}>
        Acesse nosso porfólio de operações <b>no botão abaixo.</b>
      </Text>
      <Button
        onClick={() => navigateTo("/investir")}
        maxW={{ base: "80%", md: "40%" }}
        mt={2}
        text="Ver operações"
      />
    </Box>
  );
}

export default Confirmation;
