import React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleFormData } from "../../../../redux/form/formSlice";
import CurrencyInput from "react-currency-input-field";
import useFormHelper from "../../../../helpers/form";

function InvestmentValue() {
  const dispatch = useDispatch();
  const {
    formData: { investiment },
  } = useFormHelper();

  const handleOnValueChange = (group, name, value) => {
    dispatch(
      handleFormData({
        group,
        name,
        value,
      })
    );
  };

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
      <FormControl id="value" isRequired>
        <FormLabel>Qual o valor que deseja investir?</FormLabel>
        <CurrencyInput
          id="value"
          name="value"
          group="investiment"
          className="chakra-input css-1c6j008"
          prefix="R$ "
          value={investiment?.value}
          onValueChange={(value, _, values) =>
            handleOnValueChange("investiment", "value", values.float)
          }
        />
      </FormControl>
    </>
  );
}

export default InvestmentValue;
