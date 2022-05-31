import { Box, Flex, Text, Button, Divider } from "@chakra-ui/react";

import PaginationTable from "../../../../components/Table/PaginationTabe";

const fetchPokemons = async (pageSize, offset) => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  ).then(async (res) => await res.json());
};

export default function ContractedProjects({}) {
  return (
    <Box borderRadius={"md"} bg="#fff" p={4}>
      <Flex justify="space-between" align="center">
        <Text fontSize="xl">Operações contratadas</Text>
        <Button size="sm">Cadastrar operação</Button>
      </Flex>
      <Divider mt={5} mb={8} />

      <PaginationTable fetchPokemons={fetchPokemons} />
    </Box>
  );
}
