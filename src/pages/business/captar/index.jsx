import { useState } from "react";
import { Center, GridItem, Grid, Box } from "@chakra-ui/react";

import Layout from "../layout";

export default function CaptureProject({}) {
  return (
    <Center>
      <Grid h={"full"} w="80%" templateColumns="repeat(12, 1fr)">
        <GridItem
          colSpan={12}
          h="full"
          bg="white"
          borderRadius={"md"}
          shadow="md"
          p={5}
        >
          <h1>captar</h1>
        </GridItem>
      </Grid>
    </Center>
  );
}

CaptureProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
