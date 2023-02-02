import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import Layout from "../layout";
import Card from "../../../components/Card";

export default function Dashboard() {
  return (
    <>
      <Box mb={5}>
        <Text fontSize="2xl" fontWeight="md">
          Dashboard
        </Text>
        <Text fontSize="sm" color="blackAlpha.700">
          Veja aqui todos seus ativos e como eles estão neste exato momento.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacingX={3} mb={4}>
        <Card>
          <Text>1</Text>
        </Card>
        <Card>
          <Text>2</Text>
        </Card>
        <Card>
          <Text>2</Text>
        </Card>
        <Card>
          <Text>2</Text>
        </Card>
      </SimpleGrid>
      <Card p={4}>
        <Text>Dashboard</Text>
      </Card>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
