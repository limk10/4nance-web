import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import Layout from "../layout";
import Button from "../../../components/Button";
import Container from "../../../components/Card";

import InvestmentValue from "./components/InvestmentValue";
import PersonalInformation from "./components/PersonalInformation";
import Terms from "./components/Terms";
import Conclusion from "./components/Conclusion";
import { FiAward } from "react-icons/fi";
import useFormHelper from "../../../helpers/form";
import { handleLoading } from "../../../redux/general/generalSlice";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { postPerson } from "../../../services/api/person";
import useAxiosValidate from "../../../helpers/errors/axios";
import { postInvestiment } from "../../../services/api/investiment";
import { useRouter } from "next/router";

const steps = [
  { label: "Valor investido", children: <InvestmentValue /> },
  { label: "Dados Pessoais", children: <PersonalInformation /> },
  { label: "Termos e condições", children: <Terms /> },
  { label: "Informações finais", children: <Conclusion /> },
];

export default function Invest() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { axiosErrorValidate } = useAxiosValidate();
  const {
    formData: { investiment, personData },
  } = useFormHelper();
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  const { id } = router.query;

  const { mutateAsync: mutatePostPerson } = useMutation(
    async (data) => {
      dispatch(handleLoading(true));
      await postPerson(data);
    },
    {
      onSuccess() {
        nextStep();
      },
      onError(error) {
        axiosErrorValidate(error);
      },
      onSettled() {
        dispatch(handleLoading(false));
      },
    }
  );

  const { mutateAsync: mutatePostInvestiment } = useMutation(
    async (data) => {
      dispatch(handleLoading(true));
      await postInvestiment(data);
    },
    {
      onSuccess() {
        nextStep();
      },
      onError(error) {
        axiosErrorValidate(error);
      },
      onSettled() {
        dispatch(handleLoading(false));
      },
    }
  );

  const mountPersonalDataBody = () => {
    // eslint-disable-next-line no-unused-vars
    const { email, cpf, id, ...restPersonData } = personData;

    return {
      ...restPersonData,
    };
  };

  const mountInvestimentDataBody = () => {
    return {
      project_id: id,
      invested_value: parseFloat(investiment?.value),
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeStep === 0 && investiment?.value) nextStep();
    else if (activeStep === 1) {
      const data = await mountPersonalDataBody();
      mutatePostPerson(data);
    } else if (activeStep === 2) {
      const data = await mountInvestimentDataBody();
      mutatePostInvestiment(data);
    }
  };

  return (
    <>
      <Input name="hidden-input" hidden />
      <form onSubmit={handleSubmit}>
        <Box mb={8}>
          <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
            Investimentos
          </Text>
          <Text fontSize="sm" color="blackAlpha.600">
            Investimentos escolhidos especialmente para você, invista em
            empresas reais sem sair de casa.
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
                type="submit"
                text={activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
              />
            </Flex>
          )}
        </Container>
      </form>
    </>
  );
}

Invest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
