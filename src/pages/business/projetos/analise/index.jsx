import { useState } from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";

import PaginationTable from "../../../../components/Table/PaginationTabe";

const fetchPokemons = async (pageSize, offset) => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  ).then(async (res) => await res.json());
};

export default function AnalyzeProjects({}) {
  return (
    <Box borderRadius={"md"} bg="#fff" p={4}>
      <Flex justify="space-between" align="center" py="1px">
        <Text fontSize="xl">Operações em análise</Text>
      </Flex>
      <Divider mt={5} mb={8} />

      <PaginationTable fetchPokemons={fetchPokemons} />
    </Box>
  );
}
