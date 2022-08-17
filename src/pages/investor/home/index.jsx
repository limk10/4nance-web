import { Center } from "@chakra-ui/react";

import Layout from "../layout";

export default function Home({}) {
  return (
    <Center>
      <h1>Home Investidor</h1>
    </Center>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
