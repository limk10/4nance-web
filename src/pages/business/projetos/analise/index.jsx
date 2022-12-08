import { useEffect, useState } from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";

import PaginationTable from "../../../../components/Table/PaginationTabe";

import { getEnabledOperation } from "../../../../services/api/operation";

export default function AnalyzeProjects() {
  const rows = [
    {
      key: "name_investment",
      label: "Investimento",
    },
    {
      key: "profitability",
      label: "Rentabilidade",
    },
  ];

  return (
    <Box borderRadius={"md"} bg="#fff" p={4}>
      <Flex justify="space-between" align="center" py="1px">
        <Text fontSize="xl">Operações em análise</Text>
      </Flex>
      <Divider mt={5} mb={8} />

      {/* <PaginationTable fetchData={getEnabledOperation} rows={rows} /> */}
    </Box>
  );
}
