import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import { FiAward } from "react-icons/fi";

import Layout from "../../layout";

import Button from "../../../../components/Button";
import Container from "../../../../components/Card";

import PersonalInformation from "./components/PersonalInformation";
import InvestorInformation from "./components/InvestorInformation";
import Confirmation from "./components/Confirmation";

const steps = [
  { label: "Dados Pessoais", children: <PersonalInformation /> },
  // { label: "Perfil do Investidor", children: <InvestorInformation /> },
  { label: "Confirmação", children: <Confirmation /> },
];

export default function CompleteRegistration() {
  const [form, setForm] = useState({});
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <Box mb={8}>
        <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
          Olá, Matheus Lopes
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          Complete seu cadastro, conte-nos um pouco sobre você.
        </Text>
      </Box>
      <Container p={5}>
        <form onSubmit={handleNext}>
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
                type="submit"
                size="sm"
                text={activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
              />
            </Flex>
          )}
        </form>
      </Container>
    </>
  );
}

CompleteRegistration.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
