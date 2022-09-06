import { Box, Flex, Text } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useState } from "react";

import Layout from "../layout";
import Button from "../../../components/Button";
import Container from "../../../components/Card";
import { navigateTo } from "../../../helpers/routes";

import InvestmentValue from "./components/InvestmentValue";
import PersonalInformation from "./components/PersonalInformation";
import Terms from "./components/Terms";
import Conclusion from "./components/Conclusion";
import { FiAward } from "react-icons/fi";

const steps = [
  { label: "Valor investido", children: <InvestmentValue /> },
  { label: "Dados Pessoais", children: <PersonalInformation /> },
  { label: "Termos e condições", children: <Terms /> },
  { label: "Informações finais", children: <Conclusion /> },
];

export default function Invest({}) {
  const [form, setForm] = useState({});
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <Box mb={8}>
        <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
          Investimentos
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          Investimentos escolhidos especialmente para você, invista em empresas
          reais sem sair de casa.
        </Text>
      </Box>
      <Container p={5}>
        <Steps responsive={true} activeStep={activeStep} colorScheme="green">
          {steps.map(({ label, children }) => (
            <Step label={label} key={label} icon={FiAward}>
              {children}
            </Step>
          ))}
        </Steps>

        {activeStep !== steps.length && (
          <Flex width="100%" justify="flex-end" mt={5}>
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              variant="ghost"
              text="Voltar"
            />
            <Button
              size="sm"
              onClick={nextStep}
              text={activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
            />
          </Flex>
        )}
      </Container>
    </>
  );
}

Invest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
