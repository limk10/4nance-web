import { useState, useEffect } from "react";
import {
  Center,
  Flex,
  Button,
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  useColorModeValue,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

import Steps, { Step } from "rc-steps";

import Router from "next/router";

import { AiFillPlusCircle } from "react-icons/ai";

import Layout from "../layout";
import CaptureEmployeeForm from "./components/form/CaptureEmployeeForm";
import CaptureOperationForm from "./components/form/CaptureOperationForm";

import {
  captureEmployeeSchema,
  captureOperationSchema,
  handleMessage,
} from "../../../helpers/validade";

const steps = [
  { label: "Sua empresa", description: "Conte-nos um pouco sobre sua empresa" },
  {
    label: "Sua operação",
    description: "Estamos quase lá, agora conte um pouco da sua operação",
  },
];
export default function CaptureProject({}) {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);
  const [innerWidth, setInnerWidth] = useState();
  const [employes, setEmployes] = useState([
    { name: "Pequeno mundo Rock LTDA", doc: "77.503.293/0001-54" },
    {
      name: "Clovis Basilio Servico LTDA - Kid Bengala",
      doc: "34.893.794/0001-81",
    },
  ]);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeRadio = (props, value) => {
    setForm({
      ...form,
      [props]: value,
    });
  };

  const handleSelectEmployee = (name, doc) => {
    setForm({
      ...form,
      social: name,
      fantasyName: name,
      doc,
      select: true,
    });
  };

  const validateForm = async () => {
    switch (step) {
      case 0:
        try {
          await captureEmployeeSchema.validate(form, { abortEarly: false });
          return true;
        } catch (err) {
          if (err?.errors?.length) handleMessage(err?.errors);
          return false;
        }
      case 1:
        try {
          await captureOperationSchema.validate(form, { abortEarly: false });
          return true;
        } catch (err) {
          if (err?.errors?.length) handleMessage(err?.errors);
          return false;
        }
    }
  };

  const handleStep = async (type) => {
    switch (type) {
      case "prev":
        if (step > 0) setStep(step - 1);
        break;
      case "next":
        const isValid = await validateForm(step);
        if (!isValid) return;
        if (step <= 3) setStep(step + 1);
        break;
    }
  };

  const handleContentForm = (step) => {
    switch (step) {
      case 0:
        return (
          <div align="left">
            <Text>Escolha uma empresa para qual deseja fazer a operação *</Text>
            <SimpleGrid columns={{ base: 1, md: 3, xl: 4 }} mb={10}>
              {employes.map(({ name, doc }, index) => (
                <Box
                  w="280px"
                  h="100px"
                  mt={4}
                  mr={2}
                  p={3}
                  bg={doc === form.doc ? "gray.800" : "gray.700"}
                  color="white"
                  boxShadow={"md"}
                  rounded={"md"}
                  _hover={{
                    cursor: "pointer",
                    transition: "0.5s ease",
                    backgroundColor: "gray.800",
                  }}
                  key={index}
                  onClick={() => handleSelectEmployee(name, doc)}
                >
                  <Heading fontSize={"lg"} fontWeight={500}>
                    <Stack direction="row" h="45px">
                      <Divider
                        borderLeftWidth="2px"
                        borderLeftColor={
                          doc === form.doc ? "primary.300" : "gray.700"
                        }
                        orientation="vertical"
                      />
                      <Text>{name}</Text>
                    </Stack>
                  </Heading>
                  <Text color={"gray.500"} mt={1}>
                    {doc}
                  </Text>
                </Box>
              ))}
              <Box
                w="280px"
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
                onClick={() => setForm({})}
              >
                <Flex direction="column" align="center">
                  <Heading fontSize={"lg"} fontWeight={500} mb={2}>
                    Criar nova empresa
                  </Heading>
                  <AiFillPlusCircle size="40" />
                </Flex>
              </Box>
            </SimpleGrid>
            <CaptureEmployeeForm form={form} handleChange={handleChange} />
          </div>
        );
      case 1:
        return (
          <CaptureOperationForm
            form={form}
            handleChange={handleChange}
            handleChangeRadio={handleChangeRadio}
          />
        );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") setInnerWidth(window.innerWidth);
  }, []);

  return (
    <Center>
      <Box w={{ base: "100%", md: "80%" }} bg="#fff" p={5} borderRadius={"md"}>
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

          {handleContentForm(step)}

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
                <Button onClick={() => Router.push("/business/home")} w="20%">
                  Home
                </Button>
              </Center>
            </Flex>
          ) : (
            <Flex width="100%" justify="space-between" mt={7}>
              <Button
                isDisabled={step === 0}
                mr={4}
                onClick={() => handleStep("prev")}
                variant="outline"
              >
                Voltar
              </Button>
              <Button onClick={() => handleStep("next")}>
                {step === steps.length - 1 ? "Finalizar" : "Próximo"}
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>
    </Center>
  );
}

CaptureProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
