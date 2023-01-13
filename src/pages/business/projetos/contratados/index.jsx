import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import PaginationTable from "../../../../components/Table/PaginationTabe";

import Router from "next/router";

import { getBusinessEnabledOperation } from "../../../../services/api/operation";

export default function ContractedProjects() {
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
        <Text fontSize="xl">Operações contratadas</Text>
        <Button
          onClick={() => Router.push("/business/captar")}
          size="sm"
          mt={3}
          text="Cadastrar operação"
        />
      </Flex>
      <Divider mt={5} mb={8} />

      <PaginationTable fetchData={getBusinessEnabledOperation} rows={rows} />
    </Box>
  );
}
