import {
  GridItem,
  Grid,
  Box,
  Text,
  Heading,
  Link,
  Icon,
} from "@chakra-ui/react";

import Layout from "../layout";

import {
  VscDebugLineByLine,
  VscVmOutline,
  VscRocket,
  VscEmptyWindow,
} from "react-icons/vsc";

import Feature from "../../../components/Feature";
import useAuth from "../../../helpers/auth";

export default function Home() {
  const [user] = useAuth();

  const flow = [
    {
      title: "1. Submissão",
      description:
        "Preencha o formulário com os dados do seu negócio e aguarde a devolutiva.",
      icon: VscDebugLineByLine,
    },
    {
      title: "2. Análise",
      description:
        "Nosso time irá analisar a operação e caso seja aprovada, agendaremos uma reunião.",
      icon: VscVmOutline,
    },
    {
      title: "3. Validação",
      description:
        "Análise no cadastro/crédito da empresa/empreendedor e discussão em Comitê",
      icon: VscRocket,
    },
    {
      title: "4. Contratação",
      description:
        "Se a operação for aprovada, é firmado um Contrato de Intermediação.",
      icon: VscEmptyWindow,
    },
  ];

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem colSpan={{ base: 12, md: 8 }} rowSpan={1}>
        <Box h="full" bg="white" borderRadius={"md"} shadow="md" p={5}>
          <Heading fontSize="large" fontWeight={400}>
            Bom dia,{" "}
            <Text fontSize="xl" fontWeight={500}>
              {user?.user}
            </Text>
          </Heading>
          <Text mt={7}>
            Esse é o seu painel administrativo, aqui você pode{" "}
            <Link href="#!" color="primary.300">
              captar recursos
            </Link>
            ,{" "}
            <Link href="#!" color="primary.300">
              ver suas métricas
            </Link>{" "}
            ou{" "}
            <Link href="#!" color="primary.300">
              acompanhar seus investidores.
            </Link>
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 4 }} rowSpan={4}>
        <Text mb={3} fontSize={"large"} fontWeight={500}>
          Entenda como funciona:
        </Text>
        <Box bg="white" borderRadius={"md"} shadow="md" p={5}>
          {flow.map(({ title, description, icon }, key) => (
            <Feature
              key={key}
              mb={flow.length === key + 1 ? 0 : 7}
              icon={
                <Icon as={icon} w="3rem" h="3rem" color="primary.300" mr={2} />
              }
              title={title}
              text={description}
            />
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
