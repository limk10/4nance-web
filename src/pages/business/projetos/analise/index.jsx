import { Center } from "@chakra-ui/react";

import Layout from "../../layout";

export default function AnalyzeProjects({}) {
  return (
    <Center>
      <h1>Analise</h1>
    </Center>
  );
}

AnalyzeProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
