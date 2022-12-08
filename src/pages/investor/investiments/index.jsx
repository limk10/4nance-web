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
import useAxiosValidate from "../../../helpers/errors/axios";
import { getInvestorOperation } from "../../../services/api/operation";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoading } from "../../../redux/general/generalSlice";

export default function Investiment({}) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { axiosErrorValidate } = useAxiosValidate();

  const { isLoading } = useQuery(
    ["investorOperationList"],
    getInvestorOperation,
    {
      onSuccess(data) {},
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  useEffect(() => {
    dispatch(handleLoading(isLoading));
  }, [isLoading]);

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
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={3}>
        {data.map((property) => (
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
                    onClick={() => navigateTo(`/investimentos/${123123}`)}
                    mr={2}
                    text="Ver Detalhes"
                    scheme="gray"
                    size="sm"
                  />
                  <Button
                    onClick={() => navigateTo(`/investimentos/${123123}`)}
                    fontWeight="600"
                    scheme="primary"
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
