import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

import AnalyzeProjects from "./analise";
import ContractedProjects from "./contratados";

import Layout from "../layout";

export default function Projects() {
  return (
    <Box>
      <Tabs>
        <TabList mx={5}>
          <Tab>Contratados</Tab>
          <Tab>Em Análise</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ContractedProjects />
          </TabPanel>
          <TabPanel>
            <AnalyzeProjects />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
