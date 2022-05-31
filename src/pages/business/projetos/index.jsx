import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

import AnalyzeProjects from "./analise";
import ContractedProjects from "./contratados";

import Layout from "../layout";

export default function Projects() {
  return (
    <Center>
      <SimpleGrid w={{ base: "100%", md: "80%" }}>
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
      </SimpleGrid>
    </Center>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
