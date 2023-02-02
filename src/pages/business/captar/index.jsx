import { useState, useEffect } from "react";
import {
  Center,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  useColorModeValue,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import Button from "../../../components/Button";
import Steps, { Step } from "rc-steps";
import { AiFillPlusCircle } from "react-icons/ai";
import CaptureEmployeeForm from "./components/form/CaptureEmployeeForm";
import CaptureOperationForm from "./components/form/CaptureOperationForm";
import Layout from "../layout";
import {
  getEmplpoyee,
  postEmployee,
  putEmployee,
} from "../../../services/api/employee";
import { useDispatch, useSelector } from "react-redux";
import useFormHelper from "../../../helpers/form";
import useAxiosValidate from "../../../helpers/errors/axios";
import { useMutation, useQuery } from "react-query";
import { handleLoading } from "../../../redux/general/generalSlice";
import {
  handleEmployeeList,
  useEmployee,
} from "../../../redux/employee/employeeSlice";
import { setFormData } from "../../../redux/form/formSlice";
import { postOperation } from "../../../services/api/operation";
import { clearSpecialCharacters } from "../../../helpers/format";

const steps = [
  { label: "Sua empresa", description: "Conte-nos um pouco sobre sua empresa" },
  {
    label: "Sua operação",
    description: "Estamos quase lá, agora conte um pouco da sua operação",
  },
];

export default function CaptureProject() {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [innerWidth, setInnerWidth] = useState();
  const { axiosErrorValidate } = useAxiosValidate();
  const { formData } = useFormHelper();

  const { employeeList } = useSelector(useEmployee);

  const { isLoading: isLoadingEmployeeList } = useQuery(
    ["employeeList"],
    getEmplpoyee,
    {
      onSuccess(data) {
        dispatch(handleEmployeeList(data));
      },
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  const { mutate: mutatePostEmployee } = useMutation(
    (data) => postEmployee(data),
    {
      onSuccess: () => {
        handleStep("next");
      },
      onError(error) {
        axiosErrorValidate(error);
      },
      onSettled() {
        dispatch(handleLoading(false));
      },
    }
  );

  const { mutate: mutatePutEmployee } = useMutation(
    (data) => putEmployee(data),
    {
      onSuccess: () => {
        handleStep("next");
      },
      onError(error) {
        axiosErrorValidate(error);
      },
      onSettled() {
        dispatch(handleLoading(false));
      },
    }
  );

  const { mutate: mutatePostOperation } = useMutation(
    (data) => postOperation(data),
    {
      onSuccess: () => {
        handleStep("next");
      },
      onError(error) {
        axiosErrorValidate(error);
      },
      onSettled() {
        dispatch(handleLoading(false));
      },
    }
  );

  const handleSelectEmployee = (employee) => {
    const data = {
      id: employee?.id,
      cnpj: employee?.cnpj,
      socialReaseon: employee?.social_reason,
      fantasyName: employee?.fantasy_name,
      email: employee?.email_company,
      phone: employee?.phone_company,
      address: employee?.address?.address,
      number: employee?.address?.number,
      complement: employee?.address?.complement,
      district: employee?.address?.district,
      cep: employee?.address?.cep,
      state: employee?.state_registration,
      city: employee?.address?.city?.id,
      edit: true,
    };

    dispatch(setFormData({ group: "captation", values: data }));
  };

  const handleStep = async (type) => {
    switch (type) {
      case "prev":
        if (step > 0) setStep(step - 1);
        break;
      case "next":
        if (step <= 3) setStep(step + 1);
        break;
    }
  };

  const submitEmployee = async () => {
    const { captation } = formData;
    const data = {
      ...(captation.id ? { company_id: captation.id } : ""),
      cnpj: clearSpecialCharacters(captation?.cnpj),
      social_reason: captation?.socialReaseon,
      fantasy_name: captation?.fantasyName,
      state_registration: captation?.state,
      email_company: captation?.email,
      phone_company: captation?.phone,
      address: captation?.address,
      number: captation?.number,
      complement: captation?.complement,
      district: captation?.district,
      cep: captation?.cep,
      city_id: captation?.city,
    };

    dispatch(handleLoading(true));

    if (captation.edit) await mutatePutEmployee(data);
    else await mutatePostEmployee(data);
  };

  const submitOperation = async () => {
    const { captation } = formData;
    if (!formData?.category || !formData?.modality || !captation?.description)
      return;

    const data = {
      modality_id: formData?.modality,
      category_id: formData?.category,
      company_id: captation?.id,
      name_investment: captation?.investimentName,
      description: captation?.description,
      time_investment: captation?.timeInvestment,
      profitability: captation?.profitability,
      minimum_value: captation?.minimumValue,
      max_capture: captation?.maxCapture,
      min_capture: captation?.minCapture,
    };

    dispatch(handleLoading(true));
    await mutatePostOperation(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 0) submitEmployee();
    else if (step === 1) submitOperation();
  };

  const contentForm = () => {
    switch (step) {
      case 0:
        return (
          <Box align="left">
            <Text>Escolha uma empresa para qual deseja fazer a operação</Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} mb={10}>
              {!!employeeList.length &&
                employeeList.map((employee, index) => (
                  <Box
                    h="100px"
                    mt={4}
                    mr={2}
                    p={3}
                    bg={
                      employee?.company_id === formData?.captation?.company_id
                        ? "gray.800"
                        : "gray.700"
                    }
                    color="white"
                    boxShadow={"md"}
                    rounded={"md"}
                    _hover={{
                      cursor: "pointer",
                      transition: "0.5s ease",
                      backgroundColor: "gray.800",
                    }}
                    key={index}
                    onClick={() => handleSelectEmployee(employee)}
                  >
                    <Heading fontSize={"lg"} fontWeight={500}>
                      <Stack direction="row" h="45px">
                        <Divider
                          borderLeftWidth="2px"
                          borderLeftColor={
                            employee.company_id ===
                            formData?.captation?.company_id
                              ? "primary.300"
                              : "gray.700"
                          }
                          orientation="vertical"
                        />
                        <Text>{employee?.fantasy_name}</Text>
                      </Stack>
                    </Heading>
                    <Text color={"gray.500"} mt={1}>
                      {employee?.cnpj}
                    </Text>
                  </Box>
                ))}
              <Box
                h="100px"
                mt={4}
                p={3}
                bg={useColorModeValue("gray.700")}
                color="white"
                boxShadow={"md"}
                rounded={"md"}
                _hover={{
                  cursor: "pointer",
                  transition: "0.5s ease",
                  backgroundColor: "gray.800",
                }}
                onClick={() =>
                  dispatch(setFormData({ group: "captation", values: {} }))
                }
              >
                <Flex direction="column" align="center">
                  <Heading fontSize={"lg"} fontWeight={500} mb={2}>
                    Criar nova empresa
                  </Heading>
                  <AiFillPlusCircle size="40" />
                </Flex>
              </Box>
            </SimpleGrid>
            <CaptureEmployeeForm />
          </Box>
        );
      case 1:
        return <CaptureOperationForm />;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    dispatch(handleLoading(isLoadingEmployeeList));
  }, [isLoadingEmployeeList]);

  return (
    <Box bg="#fff" p={5} borderRadius={"md"}>
      <form onSubmit={handleSubmit}>
        <Flex flexDir="column">
          <Box margin={{ base: "0", md: "0 10%" }}>
            <Steps
              direction={innerWidth < 500 ? "vertical" : "horizontal"}
              current={step}
            >
              {steps.map((s) => (
                <Step key={s} title={s.label} description={s.description} />
              ))}
            </Steps>
          </Box>

          <Spacer mt={{ base: 5, md: 3 }} />

          {contentForm()}

          {step === steps.length ? (
            <Flex px={4} width="100%" flexDir="column" mt={3}>
              <Heading fontSize="xl" textAlign="center" fontWeight={600}>
                Agora é com a gente!
              </Heading>
              <Text textAlign="center" fontWeight={400} mt={5}>
                Vamos analisar o seu projeto, mas isso é muito rápido, <br />
                dentro de 48h enviaremos um e-mail para você
              </Text>

              <Center mt={5}>
                <Button
                  onClick={() => {}}
                  w="20%"
                  text="Home"
                />
              </Center>
            </Flex>
          ) : (
            <Flex width="100%" justify="space-between" mt={7}>
              <Button
                isDisabled={step === 0}
                mr={4}
                onClick={() => handleStep("prev")}
                variant="outline"
                text="Voltar"
              />
              <Button
                type="submit"
                text={step === steps.length - 1 ? "Finalizar" : "Próximo"}
              />
            </Flex>
          )}
        </Flex>
      </form>
    </Box>
  );
}

CaptureProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
