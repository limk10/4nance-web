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
    { title: 1.423, up: false, text: "Investidores", Icon: FiUsers },
    { title: 2, up: true, text: "Operações em captação", Icon: FiBarChart },
    { title: 5, up: true, text: "Operações encerradas", Icon: FiExternalLink },
    { title: "R$ 4.799,63", up: true, text: "Total captado", Icon: FiAirplay },
    {
      title: "R$ 234,99",
      up: false,
      text: "Proventos pagos",
      Icon: FiDollarSign,
    },
    {
      title: "R$ 23.193",
      up: false,
      text: "Ticket médio",
      Icon: FiDivideSquare,
    },
  ]);
  return (
    <Center>
      <Grid
        w={{ base: "100%", md: "80%" }}
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(6, 1fr)"
        gap={4}
      >
        {info.map(({ title, text, up, Icon }) => (
          <GridItem colSpan={{ base: 12, md: 4 }} rowSpan={1}>
            <InfoCard
              title={title}
              text={text}
              up={up}
              icon={<Icon size="2rem" />}
            />
          </GridItem>
        ))}

        {/* <GridItem colSpan={{ base: 12, md: 6 }} rowSpan={4}>
          <InfoCard />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6 }} rowSpan={4}>
          <InfoCard />
        </GridItem> */}
      </Grid>
    </Center>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
