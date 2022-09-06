import {
  Avatar,
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FiAirplay, FiDownload } from "react-icons/fi";
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

export default function InvestimentDetails() {
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
                  Comercial
                </Badge>
              </Flex>
              <Text fontSize="2xl" mt={3}>
                Khaya Woods II - Meta Florestas
              </Text>
              <Text fontSize="sm" color="blackAlpha.600">
                Rentabilize IPCA + 16,05% a.a sendo Sócio de uma Floresta de
                Mogno Africano em MG.
              </Text>
              <SimpleGrid columns={2} spacing={5} mt={5}>
                <GroupInfo
                  text="Valor da Cota"
                  value="R$ 5.000,00"
                  icon={<FaPiggyBank color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Valor Captado"
                  value="R$ 4.430.000,00"
                  icon={<FaReceipt color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Participação"
                  value="0.0032% por cota"
                  icon={<FaCertificate color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Pagamentos Projetados"
                  value="Anuais"
                  icon={<FaTasks color="#4A5568" size="25" />}
                />
                <GroupInfo
                  text="Modalidade"
                  value="Equity"
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
                    Finalizado
                  </Text>
                </Flex>
                <Flex fontSize="sm" color="blackAlpha.700" mb={3}>
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
                </Box>
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
                onClick={() => navigateTo(`/investir/${123}`)}
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
                <Tab _focus={{ boxShadow: "none" }}>Operação</Tab>
                <Tab _focus={{ boxShadow: "none" }}>Empresa</Tab>
                <Tab _focus={{ boxShadow: "none" }}>Documentos</Tab>
              </TabList>
              <TabPanels color="blackAlpha.700">
                <TabPanel px={0}>
                  <Text fontSize="sm">
                    <b>IMPORTANTE:</b> Todo investimento possui riscos. Antes de
                    investir, acesse a seção de Informações Essenciais da Oferta
                    Pública e o Alerta de Riscos.
                  </Text>
                  <Text mt={5} fontWeight="bold" fontSize="xl">
                    EM QUE ESTOU INVESTINDO:
                  </Text>
                  <Text mt={2}>
                    Após o sucesso da primeira captação para uma de suas
                    fazendas, a Meta Agropecuária, agora o Grupo Khaya Woods faz
                    sua 2ª oferta para investidores através de crowdfunding, a
                    <b>
                      {" "}
                      Meta Florestas, a maior e mais produtiva fazenda do grupo.
                    </b>
                    <br />
                    <br />
                    Nesta operação, você será <b>SÓCIO</b> de uma{" "}
                    <b>Floresta de Mogno Africano</b> com a <b>Khaya Woods</b>,
                    empresa que{" "}
                    <b>
                      possui 1.400 hectares de mogno africano já plantados no
                      norte de Minas Gerais
                    </b>
                    , mais de 14 anos de operação e mais de R$ 50 milhões em
                    Capital Social.
                    <br />
                    <br />
                    Esse é um tipo de ATIVO IDEAL para quem busca RENTABILIDADE,
                    DIVERSIFICAÇÃO e FORMAÇÃO DE PATRIMÔNIO.
                  </Text>
                </TabPanel>
                <TabPanel m={0} px={0}>
                  <Text mb={5} fontSize="2xl" fontWeight="bold">
                    DIGA OI PARA DOMICILIUM!
                  </Text>

                  <Image
                    w="12vw"
                    height="auto"
                    objectFit="cover"
                    borderRadius="md"
                    boxShadow="lg"
                    src="https://www.vangardi.com.br/login/imgs/carousel/1777335695/logod.JPG"
                    alt="https://www.vangardi.com.br/login/imgs/carousel/1777335695/logod.JPG"
                  />

                  <Box
                    display="flex"
                    bg="green.50"
                    color="blackAlpha.700"
                    borderRadius="lg"
                    py={4}
                    px={2}
                    mt={5}
                  >
                    <Text
                      borderLeftWidth={2}
                      borderLeftColor="green.600"
                      pl={3}
                      fontSize="lg"
                    >
                      Com foco na melhoria das condições de consumo e acesso à
                      orgânicos, o Clube Orgânico atua na produção e
                      comercialização desses alimentos, oferecendo qualidade e
                      agilidade na vida da população
                    </Text>
                  </Box>

                  <SimpleGrid>
                    <Text mt={5} fontWeight="bold" fontSize="xl">
                      O DIFERENCIAL DA DOMICILIUM
                    </Text>
                    <Text mt={2} fontSize="sm">
                      Três sócios com conhecimentos distintos: um engenheiro
                      agrônomo com anos de atuação e experiência comercial, um
                      engenheiro eletrônico que toma frente do desenvolvimento
                      de hardware e um cientista de computação que gerencia todo
                      ecossistema de software. Essa união proporciona uma
                      empresa sólida e que estabelece a AgroFlux como líder de
                      mercado no segmento de pulverização de precisão.
                      <br />
                      <br />
                      Dessa união, surgiu a primeira solução, chamada Fluxin®!
                      Um produto patenteado, que permite a exclusividade de
                      comercialização. Esse dispositivo inovador reduz para
                      poucos minutos uma tarefa que demorava horas para ser
                      realizada. A tecnologia é de fácil entendimento e qualquer
                      profissional do agro consegue utilizá-la, criando a rotina
                      de fazer a inspeção de pulverizadores periodicamente.
                      Assim, é possível ter uma aplicação em doses corretas,
                      agredindo menos o meio ambiente e melhorando a
                      produtividade.
                      <br />
                      <br />O Fluxin está no mercado agrícola há 2 anos e com
                      forte presença em todo território nacional e em outros
                      países da América do Sul (Paraguai, Bolívia, Argentina e
                      Uruguai).
                    </Text>
                    <Divider my={5} />
                    <Text fontWeight="bold" fontSize="lg">
                      À frente da empresa, estão:
                    </Text>
                    <SimpleGrid columns={2} spacingX={5} mt={5}>
                      <Box>
                        <Avatar
                          size="2xl"
                          name="Segun Adebayo"
                          src="https://bit.ly/sage-adebayo"
                        />
                        <Text mt={5} fontWeight="bold" fontSize="md">
                          Luciano Boaventura
                        </Text>
                        <Text mt={5} fontSize="sm">
                          Presidente do Grupo Domicilium, graduado em Engenharia
                          Civil pela FUMEC. Gestor e desenvolvedor de
                          empreendimentos imobiliários a cerca de 10 anos, com
                          ampla experiência de mercado e entrega de produtos
                          inovadores. Experiência com obras de engenharia pesada
                          e foco no desenvolvimento de bairros planejados.
                        </Text>
                      </Box>
                      <Box>
                        <Avatar
                          size="2xl"
                          name="Christian Nwamba"
                          src="https://bit.ly/code-beast"
                        />
                        <Text mt={5} fontWeight="bold" fontSize="md">
                          Anselmo Boaventura
                        </Text>
                        <Text mt={5} fontSize="sm">
                          Vice presidente da Domicilium Engenharia, graduado em
                          Engenharia Civil pela PUC-MG.Atuante no mercado de
                          Agronegócios na produção de Café durante 35 anos. No
                          ramo de urbanismo e incorporação Imobiliária há 15
                          anos com empreendimentos no Alto Paranaiba, Noroeste
                          de Minas, interior de São Paulo e região metropolitana
                          de BH.
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel px={0}>
                  <SimpleGrid columns={2} spacing={3}>
                    <Box
                      borderWidth="1px"
                      borderColor="blackAlpha.100"
                      borderRadius="md"
                      w={{ xs: "50vw", lg: "20vw" }}
                      py={3}
                    >
                      <Text textAlign="center" fontSize="sm">
                        Contrato Social Meta Florestas
                      </Text>
                      <Center mt={3}>
                        <Button
                          scheme="none"
                          variant="link"
                          text="Download"
                          boxShadow="none"
                          leftIcon={<FiDownload />}
                        />
                      </Center>
                    </Box>
                    <Box
                      borderWidth="1px"
                      borderColor="blackAlpha.100"
                      borderRadius="md"
                      w={{ xs: "100vw" }}
                      py={3}
                    >
                      <Text textAlign="center" fontSize="sm">
                        Contrato Social Meta Florestas
                      </Text>
                      <Center mt={3}>
                        <Button
                          scheme="none"
                          variant="link"
                          text="Download"
                          boxShadow="none"
                          leftIcon={<FiDownload />}
                        />
                      </Center>
                    </Box>
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
