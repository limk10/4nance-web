import { useState, useEffect } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Center,
  GridItem,
  Grid,
  Flex,
  Button,
  Heading,
  Text,
  Box,
  Badge,
  Stack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import Router from "next/router";

import { AiFillPlusCircle } from "react-icons/ai";

import Layout from "../layout";
import CaptureEmployeeForm from "./components/form/CaptureEmployeeForm";
import CaptureOperationForm from "./components/form/CaptureOperationForm";

const steps = [
  { label: "Sua empresa", description: "Conte-nos um pouco sobre sua empresa" },
  {
    label: "Sua operação",
    description: "Estamos quase lá, agora conte um pouco da sua operação",
  },
];
export default function CaptureProject({}) {
  const [form, setForm] = useState({});
  const [employes, setEmployes] = useState([
    { name: "Pequeno mundo Rock LTDA", doc: "77.503.293/0001-54" },
    {
      name: "Clovis Basilio Servico LTDA - Kid Bengala",
      doc: "34.893.794/0001-81",
    },
  ]);
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelectEmployee = (name, doc) => {
    setForm({
      ...form,
      social: name,
      fantasyName: name,
      doc,
    });
  };

  const handleContentForm = (step) => {
    switch (step) {
      case 0:
        return (
          <div align="left">
            <Text>Escolha uma empresa para qual deseja fazer a operação *</Text>
            <Flex>
              {employes.map(({ name, doc }, index) => (
                <Box
                  w="250px"
                  h="100px"
                  mt={4}
                  mb={10}
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
                w="250px"
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
            </Flex>
            <CaptureEmployeeForm form={form} handleChange={handleChange} />
          </div>
        );
      case 1:
        return <CaptureOperationForm form={form} handleChange={handleChange} />;
    }
  };

  return (
    <Center>
      <Grid
        w={{ base: "100%", md: "80%" }}
        h={"full"}
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem
          colSpan={12}
          p={5}
          h="full"
          bg="white"
          borderRadius={"md"}
          shadow="md"
          align="center"
        >
          <Center width={{ base: "100%", md: "80%" }}>
            <Flex flexDir="column" width="100%">
              <Steps colorScheme="yellow" activeStep={activeStep}>
                {steps.map(({ label, description }, index) => (
                  <Step
                    mb={10}
                    label={label}
                    key={label}
                    description={description}
                  >
                    {handleContentForm(index)}
                  </Step>
                ))}
              </Steps>
              {activeStep === steps.length ? (
                <Flex px={4} py={4} width="100%" flexDir="column" mt={8}>
                  <Heading fontSize="xl" textAlign="center" fontWeight={600}>
                    Agora é com a gente Matheus Lopes!
                  </Heading>
                  <Text textAlign="center" fontWeight={400} mt={5}>
                    Vamos analisar o seu projeto, mas isso é muito rápido,{" "}
                    <br />
                    dentro de 48h enviaremos um e-mail para você
                  </Text>

                  <Center mt={5}>
                    <Button
                      onClick={() => Router.push("/business/home")}
                      w="20%"
                    >
                      Home
                    </Button>
                  </Center>
                </Flex>
              ) : (
                <Flex width="100%" justify="space-between" mt={7}>
                  <Button
                    isDisabled={activeStep === 0}
                    mr={4}
                    onClick={prevStep}
                    variant="outline"
                  >
                    Voltar
                  </Button>
                  <Button onClick={nextStep}>
                    {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
                  </Button>
                </Flex>
              )}
            </Flex>
          </Center>
        </GridItem>
      </Grid>
    </Center>
  );
}

CaptureProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
