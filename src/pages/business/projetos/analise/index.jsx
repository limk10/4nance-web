import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import PaginationTable from "../../../../components/Table/PaginationTabe";
import { getBusinessAnalyzeOperation } from "../../../../services/api/operation";

export default function AnalyzeProjects() {
  const rows = [
    {
      key: "name_investment",
      label: "Investimento",
    },
    {
      key: "profitability",
      label: "Rentabilidade(% ano)",
    },
    {
      key: "min_capture",
      label: "Captura Min.",
      brlCurrency: true,
    },
    {
      key: "max_capture",
      label: "Captura Máx.",
      brlCurrency: true,
    },
    {
      key: "time_investment",
      label: "Temp. de Invest. (Meses)",
    },
    {
      key: "minimum_value",
      label: "Invest. Mínimo",
      brlCurrency: true,
    },
    // {
    //   key: "actions",
    //   label: "Açoes",
    //   edit: true,
    //   details: true,
    // },
  ];

  return (
    <Box borderRadius={"md"} bg="#fff" p={4}>
      <Flex
        justify={{ base: "", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Text fontSize="xl">Operações em análise</Text>
      </Flex>
      <Divider mt={5} mb={8} />

      <PaginationTable fetchData={getBusinessAnalyzeOperation} rows={rows} />
    </Box>
  );
}
