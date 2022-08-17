import {
  Badge,
  Box,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import Layout from "../layout";

import Button from "../../../components/Button";
import { navigateTo } from "../../../helpers/routes";

export default function Investiment({}) {
  const propertyList = [
    {
      imageUrl:
        "https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg",
      imageAlt: "Rear view of modern home with pool",
      modality: "Equity",
      category: "Comercial",
      title: "4Nance - Energia Solar LTDA",
      formattedPrice: "R$10.000",
      participation: "	0.0032%",
      captedTotal: "R$3.000.000",
    },
    {
      imageUrl:
        "https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg",
      imageAlt: "Rear view of modern home with pool",
      modality: "Equity",
      category: "Comercial",
      title: "4Nance - Energia Solar LTDA",
      formattedPrice: "R$10.000",
      participation: "	0.0032%",
    },
    {
      imageUrl:
        "https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg",
      imageAlt: "Rear view of modern home with pool",
      modality: "Equity",
      category: "Comercial",
      title: "4Nance - Energia Solar LTDA",
      formattedPrice: "R$10.000",
      participation: "	0.0032%",
    },
    {
      imageUrl:
        "https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg",
      imageAlt: "Rear view of modern home with pool",
      modality: "Equity",
      category: "Comercial",
      title: "4Nance - Energia Solar LTDA",
      formattedPrice: "R$10.000",
      participation: "	0.0032%",
    },
  ];
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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
        {propertyList.map((property) => (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            pos="relative"
            bg="white"
          >
            <Image
              w="100%"
              height="250px"
              objectFit="cover"
              opacity="90%"
              src={property.imageUrl}
              alt={property.imageAlt}
            />

            <Box p="4">
              <Badge
                pos="absolute"
                top={2}
                left={2}
                borderRadius="md"
                px="2"
                colorScheme="whatsapp"
              >
                Nova Oportunidade
              </Badge>
              <Box display="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  &bull; categoria {property.category} <br /> &bull; modalidade{" "}
                  {property.modality}
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                lineHeight="tight"
                noOfLines={1}
                fontSize="lg"
                pt="1"
                mb={3}
              >
                {property.title}
              </Box>

              <VStack spacing={1} alignItems="flex-start">
                <Box display="flex" color="gray.600" fontSize="sm">
                  <Text fontWeight="600" mr={1}>
                    Valor da Cota
                  </Text>
                  {property.formattedPrice}
                </Box>
                <Box display="flex" color="gray.600" fontSize="sm">
                  <Text fontWeight="600" mr={1}>
                    Participação
                  </Text>
                  {property.participation} por cota
                </Box>
                <Box display="flex" color="gray.600" fontSize="sm">
                  <Text fontWeight="600" mr={1}>
                    Total captado
                  </Text>
                  {property?.captedTotal || "Não finalizado"}
                </Box>
              </VStack>

              <Box
                display="flex"
                flexDir="column"
                alignItems="end"
                justifyContent="end"
              >
                <Divider my={4} />
                <Box>
                  <Button
                    onClick={() => {}}
                    mr={2}
                    text="Ver Detalhes"
                    schemeColor="gray"
                    size="sm"
                  />
                  <Button
                    onClick={() => navigateTo(`/investimentos/${123123}`)}
                    fontWeight="600"
                    text="Investir"
                    size="sm"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

Investiment.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
