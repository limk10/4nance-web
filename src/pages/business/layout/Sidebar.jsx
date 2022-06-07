import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRouter, Router } from "next/router";

import {
  FiPieChart,
  FiHome,
  FiBarChart,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

const Sidebar = ({ onClose, ...rest }) => {
  const router = useRouter();

  const [menu, setMenu] = useState([
    {
      name: "Dashboard",
      path: "/business/dashboard",
      icon: FiPieChart,
      submenu: [],
    },
    {
      name: "Operações",
      path: "/business/projetos",
      icon: FiBarChart,
      submenu: [],
    },
    {
      name: "Proventos",
      path: "/business/proventos",
      icon: FiDollarSign,
      submenu: [],
    },
    {
      name: "Meus investidores",
      path: "/business/investidores",
      icon: FiUsers,
      submenu: [],
    },
  ]);

  const isMenuAcvite = (path) => {
    return menu.find((data) => router.pathname.includes(path));
  };

  const navigateTo = (route) => {
    router.push(route);
  };

  const handleNavigate = (path) => {
    onClose();
    navigateTo(path);
  };

  const NavItem = ({ icon, children, path, ...rest }) => {
    return (
      <Link
        href="#!"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => handleNavigate(path)}
      >
        <Flex
          align="center"
          px="4"
          py="3"
          role="group"
          cursor="pointer"
          fontSize="15"
          _hover={{
            bg: "gray.900",
            color: "white",
            transition: "0.3s ease",
          }}
          fontWeight={400}
          color={isMenuAcvite(path) ? "white" : "#9899ac"}
          bg={isMenuAcvite(path) ? "gray.900" : ""}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "primary.500",
              }}
              color={isMenuAcvite(path) ? "primary.500" : ""}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };

  return (
    <>
      <Box
        zIndex={10}
        transition="3s ease"
        bg={useColorModeValue("gray.800")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex
          height="4rem"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "center" }}
          bg={useColorModeValue("gray.900")}
          mb={4}
          px={5}
        >
          <Flex color="white">
            <Text fontSize="x-large" fontWeight="400">
              4Nance
            </Text>
            <Text fontSize="lg" mt="8px" ml={1} fontWeight="100">
              for business
            </Text>
          </Flex>

          {/* <Image width="8rem" src="/logo-default.svg" alt="logo-4nance" /> */}

          <CloseButton
            display={{ base: "flex", md: "none" }}
            color={"white"}
            size={16}
            onClick={onClose}
          />
        </Flex>

        <NavItem path="/business/home" key={"home"} icon={FiHome}>
          Home
        </NavItem>

        <Text
          mt={4}
          mb={1}
          px={4}
          letterSpacing={"0.09rem"}
          fontSize="xs"
          color={"#9899ac"}
        >
          • MEU NEGÓCIO
        </Text>

        {menu.map((link) => (
          <NavItem key={link.name} icon={link.icon} {...link}>
            {link.name}
          </NavItem>
        ))}
        <Flex justify={"center"} position="absolute" bottom={5} ml={7}>
          <Button
            onClick={() => {
              onClose();
              navigateTo("/business/captar");
            }}
            px={10}
          >
            Quero captar
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
