import { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import { FiAward } from "react-icons/fi";

import Layout from "../../layout";

import Button from "../../../../components/Button";
import Container from "../../../../components/Card";

import PersonalInformation from "./components/PersonalInformation";
import Confirmation from "./components/Confirmation";
import useFormHelper from "../../../../helpers/form";
import { getPerson, postPerson } from "../../../../services/api/person";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../../redux/form/formSlice";
import { handleLoading } from "../../../../redux/general/generalSlice";
import useAxiosValidate from "../../../../helpers/errors/axios";

const steps = [
  { label: "Dados Pessoais", children: <PersonalInformation /> },
  { label: "Confirmação", children: <Confirmation /> },
];

export default function CompleteRegistration() {
  const dispatch = useDispatch();
  const { axiosErrorValidate } = useAxiosValidate();
  const { formData } = useFormHelper();
  const { nextStep, activeStep } = useSteps({
    initialStep: 0,
  });

  const { isLoading: isLoadingPerson } = useQuery(["queryPerson"], getPerson, {
    onSuccess(data) {
      dispatch(setFormData({ group: "completeRegistration", values: data }));
    },
    onError(error) {
      axiosErrorValidate(error);
    },
  });

  const { mutateAsync: mutatePostPerson } = useMutation(
    (data) => postPerson(data),
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { completeRegistration } = formData;
    const data = {
      name: completeRegistration?.name,
      document: completeRegistration?.document,
      phone_1: completeRegistration?.phone_1,
      phone_2: completeRegistration?.phone_2,
      email: completeRegistration?.email,
      company_id: null,
      address: completeRegistration?.address,
      number: completeRegistration?.number,
      complement: completeRegistration?.complement,
      district: completeRegistration?.district,
      cep: completeRegistration?.cep,
      city_id: completeRegistration?.city,
    };

    dispatch(handleLoading(true));
    await mutatePostPerson(data);
  };

  useEffect(() => {
    dispatch(handleLoading(isLoadingPerson));
  }, [isLoadingPerson]);

  return (
    <>
      <Box mb={8}>
        <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
          Olá, empresário
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          Complete seu cadastro, conte-nos um pouco sobre você.
        </Text>
      </Box>
      <Container p={5}>
        <form onSubmit={handleSubmit}>
          <Steps responsive={true} activeStep={activeStep} colorScheme="green">
            {steps.map(({ label, children }) => (
              <Step label={label} key={label} icon={FiAward}>
                {children}
              </Step>
            ))}
          </Steps>

          {activeStep === 0 && (
            <Flex width="100%" justify="flex-end" mt={5}>
              {/* <Button
                isDisabled={activeStep === 0}
                mr={4}
                onClick={prevStep}
                size="sm"
                variant="ghost"
                text="Voltar"
              /> */}
              <Button type="submit" text="Finalizar" />
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
