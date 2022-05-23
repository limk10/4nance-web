import { useState } from "react";
import { Center, GridItem, Grid, Box } from "@chakra-ui/react";

import Layout from "../layout";

import InfoCard from "../../../components/InfoCard";

import {
  FiUsers,
  FiBarChart,
  FiAirplay,
  FiDollarSign,
  FiDivideSquare,
  FiExternalLink,
} from "react-icons/fi";

export default function Dashboard({}) {
  const [info, setInfo] = useState([
    { title: "0", text: "Investidores", Icon: FiUsers },
    { title: "0", text: "Operações em captação", Icon: FiBarChart },
    { title: "0", text: "Operações encerradas", Icon: FiExternalLink },
    { title: "0", text: "Total captado", Icon: FiAirplay },
    { title: "0", text: "Proventos pagos", Icon: FiDollarSign },
    { title: "0", text: "Ticket médio", Icon: FiDivideSquare },
  ]);
  return (
    <Center>
      <Grid
        w={{ base: "100%", md: "80%" }}
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(6, 1fr)"
        gap={4}
      >
        {info.map(({ title, text, Icon }) => (
          <GridItem colSpan={{ base: 12, md: 4 }} rowSpan={1}>
            <InfoCard title={title} text={text} icon={<Icon size="2rem" />} />
          </GridItem>
        ))}

        <GridItem colSpan={{ base: 12, md: 6 }} rowSpan={4}>
          <InfoCard />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6 }} rowSpan={4}>
          <InfoCard />
        </GridItem>
      </Grid>
    </Center>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
