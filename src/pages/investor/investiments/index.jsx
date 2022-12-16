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
import { useMutation, useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoading } from "../../../redux/general/generalSlice";
import { formatCurrency } from "../../../helpers/format";

export default function Investiment({}) {
  const dispatch = useDispatch();
  const { axiosErrorValidate } = useAxiosValidate();

  const { isLoading, data } = useQuery(
    "investorOperationList",
    getInvestorOperation,
    {
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
      {!data?.length && (
        <Text fontSize="larger" color="blackAlpha.800">
          Nenhum investimento encontrado!
        </Text>
      )}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={3}>
        {data?.length &&
          data.map((property) => (
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
                src="https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg"
                alt="https://bloxs.com.br/api/filesystem/1.0/public/project/files/92/banner/banner-moss-creditos-de-carbono.jpg"
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
                    &bull; categoria {property?.category?.name} <br /> &bull;
                    modalidade {property?.modality?.name}
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
                  {property?.name_investment}
                </Box>

                <VStack spacing={1} alignItems="flex-start">
                  <Box display="flex" color="gray.600" fontSize="sm">
                    <Text fontWeight="600" mr={1}>
                      Mín Captura
                    </Text>
                    {formatCurrency(property?.min_capture)}
                  </Box>
                  <Box display="flex" color="gray.600" fontSize="sm">
                    <Text fontWeight="600" mr={1}>
                      Máx Captura
                    </Text>
                    {formatCurrency(property?.max_capture)}
                  </Box>
                  <Box display="flex" color="gray.600" fontSize="sm">
                    <Text fontWeight="600" mr={1}>
                      Participação
                    </Text>
                    {property?.minimum_value
                      ? formatCurrency(property?.minimum_value)
                      : "Não finalizado"}
                  </Box>
                  <Box display="flex" color="gray.600" fontSize="sm">
                    <Text fontWeight="600" mr={1}>
                      Rentabilidade
                    </Text>
                    {property?.profitability}%
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
                      onClick={() =>
                        navigateTo(`/investimentos/${property?.id}`)
                      }
                      mr={2}
                      text="Ver Detalhes"
                      scheme="gray"
                      size="sm"
                    />
                    <Button
                      onClick={() => navigateTo(`/investir/${property?.id}`)}
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
