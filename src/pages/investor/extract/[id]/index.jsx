import { Box, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function InvestimentDetails() {
  return (
    <>
      <Box mb={8}>
        <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
          Detalhes do Extrato
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          Escolha um dos investimentos escolhidos especialmente para você
        </Text>
      </Box>
    </>
  );
}

InvestimentDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
