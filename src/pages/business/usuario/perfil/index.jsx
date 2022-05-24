import { useState } from "react";
import { Center, GridItem, Grid, Box } from "@chakra-ui/react";

import Layout from "../../layout";

export default function UserPerfil({}) {
  return (
    <Center>
      <Grid
        w={{ base: "100%", md: "80%" }}
        h={"full"}
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem
          colSpan={12}
          h="full"
          bg="white"
          borderRadius={"md"}
          shadow="md"
          p={5}
        >
          <h1>PERFIL</h1>
        </GridItem>
      </Grid>
    </Center>
  );
}

UserPerfil.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
