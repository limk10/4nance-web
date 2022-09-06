import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import Button from "../../../../components/Button";

import { AiOutlineBarcode } from "react-icons/ai";

function Conclusion() {
  return (
    <>
      <Box mt={5}>
        <Text>
          Sua reserva de R$ <b>5.000,00</b> no investimento <b>xxxxxxx xxx</b>{" "}
          foi realizada com sucesso!
        </Text>

        <Text mt={3}>Agora você tem duas opções</Text>

        <OrderedList>
          <ListItem>
            Pagar o boleto e fazer a reserva do seu investimento.
          </ListItem>
          <ListItem>
            Aguardar até que a operação atinja o investimento mínimo
          </ListItem>
        </OrderedList>

        <Text mt={3}>
          Lembrando que, você pode desistir do seu investimento até 5 dias após
          o pagamento.
        </Text>

        <Alert
          mt={5}
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          textAlign="left"
          maxW={{ base: "100%", md: "80%", xl: "50%" }}
        >
          {/* <AlertIcon boxSize="40px" mr={0} /> */}
          <AlertTitle mb={1} fontSize="lg">
            Seu boleto
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            <b>Data de vencimento:</b> 04/11/2022
          </AlertDescription>
          <AlertDescription maxWidth="sm">
            <b>Valor:</b> R$ 5.000,00
          </AlertDescription>
          <AlertDescription>
            <b>Linha digitável:</b> 12312412312678.53y17 16123517283182351 1283
          </AlertDescription>

          <Button
            leftIcon={<AiOutlineBarcode />}
            maxW={{ base: "80%", md: "40%" }}
            mt={8}
            colorScheme="green"
            text="Visualizar boleto"
          />
        </Alert>

        <Text mt={10} maxW={{ base: "100%", md: "80%", xl: "50%" }}>
          Em função de regulação da Comissão de Valores Mobiliarios (CVM), e de
          forma que dê mais segurança as nossas operações, cada captação possúi
          sua própria conta, estas contas são movimentadas apenas pela própria
          instituição financeira, reguladas e fiscalizadas pelo Banco Central.
        </Text>

        <Text mt={10}>
          Acesse sua carteira e acompanhe <b>seus investimentos.</b>
        </Text>
        <Button
          maxW={{ base: "80%", md: "40%" }}
          mt={2}
          text="Acessar minha conta"
        />
      </Box>
    </>
  );
}

export default Conclusion;
