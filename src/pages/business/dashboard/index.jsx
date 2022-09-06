import { useState } from "react";
import { Center, GridItem, Grid, Box, SimpleGrid } from "@chakra-ui/react";

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
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
        {info.map(({ title, text, up, Icon }) => (
          <InfoCard
            title={title}
            text={text}
            up={up}
            icon={<Icon size="2rem" />}
          />
        ))}
      </SimpleGrid>

      {/* <GridItem colSpan={{ base: 12, md: 6 }} rowSpan={4}>
          <InfoCard />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6 }} rowSpan={4}>
          <InfoCard />
        </GridItem> */}
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
