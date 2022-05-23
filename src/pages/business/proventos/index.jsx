import { Center } from "@chakra-ui/react";

import Layout from "../layout";

export default function Earnings({}) {
  return (
    <Center>
      <h1>Proventos</h1>
    </Center>
  );
}

Earnings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
