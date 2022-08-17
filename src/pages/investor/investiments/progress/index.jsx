import { Box, Text } from "@chakra-ui/react";
import Layout from "../../layout";

export default function InvestimentInProgress() {
  return (
    <>
      <Box mb={8}>
        <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
          Investimentos em Progresso
        </Text>
        <Text fontSize="sm" color="blackAlpha.600">
          Escolha um dos investimentos escolhidos especialmente para você
        </Text>
      </Box>
    </>
  );
}

InvestimentInProgress.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
