import { useState } from "react";
import { Center, GridItem, Grid, Box } from "@chakra-ui/react";

import Layout from "../../layout";

export default function ContractedProjects({}) {
  return (
    <Center>
      <h1>Contratdos</h1>
    </Center>
  );
}

ContractedProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
