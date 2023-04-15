import {
  Badge,
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import {
  FaCertificate,
  FaPiggyBank,
  FaReceipt,
  FaTag,
  FaTasks,
  FaUserFriends,
} from "react-icons/fa";
import Button from "../../../../components/Button";
import Layout from "../../layout";
import Card from "../../../../components/Card";
import { navigateTo } from "../../../../helpers/routes";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import {
  getDocumentsInvestorOperation,
  getInvestorEnabledOperationById,
  getTextsInvestorOperation,
} from "../../../../services/api/operation";
import useAxiosValidate from "../../../../helpers/errors/axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoading } from "../../../../redux/general/generalSlice";
import { formatCurrency } from "../../../../helpers/format";

export default function InvestimentDetails() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { axiosErrorValidate } = useAxiosValidate();
  const [texts, setTexts] = useState([]);
  const [files, setFiles] = useState([]);
  const [investiment, setInvestiment] = useState([]);

  const { mutateAsync: getInvestimentByID } = useMutation(
    (data) => getInvestorEnabledOperationById(data),
    {
      onSuccess(data) {
        setInvestiment(data);
      },
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  const { mutateAsync: getDocuments } = useMutation(
    (data) => getDocumentsInvestorOperation(data),
    {
      onSuccess(data) {
        setFiles(data);
      },
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  const { mutateAsync: getTexts } = useMutation(
    (data) => getTextsInvestorOperation(data),
    {
      onSuccess(data) {
        setTexts(data);
      },
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  const init = async () => {
    dispatch(handleLoading(true));
    await getInvestimentByID(id);
    await getTexts(id);
    await getDocuments(id);
    dispatch(handleLoading(false));
  };

  useEffect(() => {
    if (id) init();
  }, [id]);

  const GroupInfo = ({ text, value, icon }) => {
    return (
      <Box display="flex" alignItems="center" my={1}>
        <Box borderRadius="full" bg="#ffc709" p={2.5}>
          {icon}
        </Box>
        <Flex flexDir="column" fontSize="sm" ml={3}>
          <Text color="blackAlpha.700">{text}</Text>
          <Text fontWeight="600" color="blackAlpha.900">
            {value}
          </Text>
        </Flex>
      </Box>
    );
  };

  return (
    <>
      <Box mb={8}>
        <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
          Detalhes do Investimento
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          Escolha um dos investimentos escolhidos especialmente para você
        </Text>
      </Box>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={4}
        display="flex"
        alignItems="flex-start"
        mt={5}
      >
        <Box
          display="flex"
          flexDir="column"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          w={{ xs: "100vw" }}
          p={3}
          py={5}
        >
          <Box boxSizing="content-box">
            <Image
              w="100%"
              height="250px"
              objectFit="cover"
              borderRadius="md"
              boxShadow="lg"
              src="https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg"
              alt="https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg"
            />
            <Box mt={4} px={3}>
              <Flex>
                <Badge
                  colorScheme="whatsapp"
                  fontSize="md"
                  px={3}
                  borderRadius="md"
                >
                  {investiment?.modality?.name}
                </Badge>
              </Flex>
              <Text fontSize="2xl" mt={3}>
                {investiment?.name}
              </Text>
              <Text fontSize="sm" color="blackAlpha.600">
                {investiment?.description}
              </Text>
              <SimpleGrid columns={2} spacing={5} mt={5}>
                <GroupInfo
                  text="Valor da Cota"
                  value={formatCurrency(investiment?.minimum_value)}
                  icon={<FaPiggyBank size="25" />}
                />
                <GroupInfo
                  text="Valor Captado"
                  value="R$ 4.430.000,00"
                  icon={<FaReceipt color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Participação"
                  value={`${investiment?.profitability}% por cota`}
                  icon={<FaCertificate color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Pagamentos Projetados"
                  value={investiment?.time_investment}
                  icon={<FaTasks color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Modalidade"
                  value={investiment?.category?.name}
                  icon={<FaTag color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Investidores"
                  value="199"
                  icon={<FaUserFriends color="#4A5568" size="25" />}
                />
              </SimpleGrid>

              <Box my={10}>
                <Flex mb={3}>
                  <Text color="blackAlpha.700" fontSize="lg">
                    Status:
                  </Text>
                  <Text color="blackAlpha.900" fontSize="lg" ml={1}>
                    {investiment?.enabled ? "Em Andamento" : "Finalizado"}
                  </Text>
                </Flex>
                {/* <Flex fontSize="sm" color="blackAlpha.700" mb={3}>
                  <Flex alignItems="center">
                    <Box width="15px" height="15px" bg="primary.300" />
                    <Text ml={1}>Cotas adquiridas</Text>
                  </Flex>
                  <Flex alignItems="center" ml={4}>
                    <Box width="15px" height="15px" bg="primary.500" />
                    <Text ml={1}>Cotas Reservadas</Text>
                  </Flex>
                </Flex>

                <Box display="flex">
                  <Progress
                    borderLeftRadius="sm"
                    w="80%"
                    value={100}
                    colorScheme=""
                    style={{ backgroundColor: "#ffc709" }}
                  />
                  <Progress
                    borderRightRadius="sm"
                    w="20%"
                    hasStripe
                    value={100}
                    colorScheme=""
                    style={{ backgroundColor: "#dfac00" }}
                  />
                </Box> */}
              </Box>

              <Button
                mb={5}
                variant="link"
                text="Fazer o download do Prospecto"
                boxShadow="none"
                onClick={() => {}}
                leftIcon={<FiDownload />}
              />
              <br />
              <Button
                onClick={() => navigateTo(`/investir/${id}`)}
                text="FAZER INVESTIMENTO"
                fontWeight="600"
                colorScheme="green"
              />
              <br />
              <Button
                mt={5}
                scheme="none"
                variant="link"
                text="Duvidas? Converse com nossos especialistas."
                boxShadow="none"
              />
            </Box>
          </Box>
        </Box>
        <Box mt={{ base: 7, lg: 0 }} w="100%">
          <Text color="blackAlpha.700" fontSize="2xl">
            Sobre o investimento
          </Text>
          <Card p={3} mt={3}>
            <Tabs colorScheme="green" px={2}>
              <TabList mb={3}>
                {!!texts?.length &&
                  texts.map(({ type_post }) => (
                    <Tab
                      key={type_post}
                      index={type_post}
                      _focus={{ boxShadow: "none" }}
                    >
                      {type_post === "operation" ? "Operação" : "Empresa"}
                    </Tab>
                  ))}
                <Tab _focus={{ boxShadow: "none" }}>Documentos</Tab>
              </TabList>
              <TabPanels color="blackAlpha.700">
                {!!texts?.length &&
                  texts.map(({ title, text }, index) => (
                    <TabPanel key={title} index={index} px={0}>
                      <Text fontSize="sm">
                        <b>IMPORTANTE:</b> Todo investimento possui riscos.
                        Antes de investir, acesse a seção de Informações
                        Essenciais da Oferta Pública e o Alerta de Riscos.
                      </Text>
                      <Text mt={5} fontWeight="bold" fontSize="xl">
                        {title}
                      </Text>
                      <Text mt={2}>{text}</Text>
                    </TabPanel>
                  ))}
                <TabPanel px={0}>
                  <SimpleGrid columns={2} spacing={3}>
                    {!!files?.length &&
                      files.map(({ url, name }) => (
                        <Box
                          key={url}
                          borderWidth="1px"
                          borderColor="blackAlpha.100"
                          borderRadius="md"
                          w={{ xs: "50vw", lg: "20vw" }}
                          py={3}
                        >
                          <Text textAlign="center" fontSize="sm">
                            {name?.slice(0, 18)}
                          </Text>
                          <Center mt={3}>
                            <Button
                              scheme="none"
                              variant="link"
                              text="Download"
                              boxShadow="none"
                              onClick={() => {
                                window.open(url, "_blank").focus();
                              }}
                              leftIcon={<FiDownload />}
                            />
                          </Center>
                        </Box>
                      ))}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
        </Box>
      </Stack>
    </>
  );
}

InvestimentDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
