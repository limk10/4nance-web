import { Box, Center, Fade, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../../layout";

export default function InvestimentInProgress() {
  const [success, setSuccess] = useState(true);
  return (
    <>
      <Text fontSize="xl" fontWeight="md" color="blackAlpha.800">
        Investimentos em Progresso
      </Text>
      <Text fontSize="sm" color="blackAlpha.600">
        Escolha um dos investimentos escolhidos especialmente para você
      </Text>
    </>
  );
}

InvestimentInProgress.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
