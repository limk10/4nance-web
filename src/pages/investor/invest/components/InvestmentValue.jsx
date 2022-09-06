import React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

function InvestmentValue() {
  return (
    <>
      <Box my={5}>
        <Text fontSize="xl" fontWeight="900" color="blackAlpha.800">
          Investimento
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          Insira o valor que deseja investir nesta operação!
        </Text>
      </Box>
      <Alert
        borderRadius="md"
        fontSize="sm"
        color="blackAlpha.700"
        status="warning"
        mb={6}
      >
        <AlertIcon />O valor mínimo do investimento é de
        <Text ml={1} fontWeight="bold">
          R$ 5.000,00
        </Text>
        , sendo permitido valores
        <Text ml={1} fontWeight="bold">
          {" "}
          múltiplos de R$ 5.000,00.
        </Text>
      </Alert>
      <FormControl id="investiment-value" isRequired>
        <FormLabel>Valor do investimento</FormLabel>
        <Input name="number" value="" onChange={() => {}} />
      </FormControl>
    </>
  );
}

export default InvestmentValue;
