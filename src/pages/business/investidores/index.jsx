import { Center } from "@chakra-ui/react";

import Layout from "../layout";

export default function Investors({}) {
  return (
    <Center>
      <h1>Investidores</h1>
    </Center>
  );
}

Investors.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
