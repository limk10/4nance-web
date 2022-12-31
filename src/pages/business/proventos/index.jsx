import { Box, Flex, Divider, Text, Grid, GridItem } from "@chakra-ui/react";

import Layout from "../layout";

import InfoCard from "../../../components/InfoCard";

import { FiDollarSign, FiDivideSquare } from "react-icons/fi";

export default function Earnings() {
  return (
    <Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} mb={8}>
        <GridItem colSpan={{ base: 12, lg: 6 }}>
          <InfoCard
            title="Proventos Distribúidos"
            text="R$ 453,44"
            up={true}
            icon={<FiDivideSquare size="2rem" />}
          />
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 6 }}>
          <InfoCard
            title="Total em Investimentos"
            text="R$ 453,44"
            up={true}
            icon={<FiDollarSign size="2rem" />}
          />
        </GridItem>
      </Grid>

      <Box borderRadius={"md"} bg="#fff" p={4}>
        <Flex justify="space-between" align="center" py="1px">
          <Text fontSize="xl">Previsões de ganho</Text>
        </Flex>
        <Divider mt={5} mb={8} />

        {/* <PaginationTable fetchPokemons={fetchPokemons} /> */}
      </Box>
    </Box>
  );
}

Earnings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
