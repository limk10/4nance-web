import React, { useState } from "react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Link,
  useColorModeValue,
  useDisclosure,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  VStack,
  Divider,
  WrapItem,
} from "@chakra-ui/react";

import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiTrendingUp,
  FiBell,
  FiPieChart,
  FiBarChart,
  FiDollarSign,
  FiUsers,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import { navigateTo } from "../../../helpers/routes";
import Button from "../../../components/Button";
import useAuth from "../../../helpers/auth";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, logout] = useAuth();

  // const Links = ["Dashboard", "Meus investimetnos", "Proventos", "Extratos"];

  const [menu, setMenu] = useState([
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FiPieChart,
      submenu: [],
    },
    {
      name: "Investimentos",
      path: "/investimentos/em-progresso",
      icon: FiBarChart,
      submenu: [],
    },
    {
      name: "Proventos",
      path: "/proventos",
      icon: FiDollarSign,
      submenu: [],
    },
    {
      name: "Extrato",
      path: "/extrato",
      icon: FiUsers,
      submenu: [],
    },
  ]);

  const NavLink = ({ _menu: { name, path } }) => (
    <Link
      onClick={() => navigateTo(path)}
      py={1}
      px={2}
      rounded={"md"}
      _hover={{
        bg: "gray.300",
      }}
      _focus={{ outline: 0 }}
      href={"#!"}
    >
      {name}
    </Link>
  );

  return (
    <>
      <Box bg="none" px={{ base: 2, md: 8 }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            icon={isOpen ? <FiX /> : <FiMenu pl={3} />}
            aria-label={"Abrir Menu"}
            onClick={isOpen ? onClose : onOpen}
            borderColor="gray.200"
            borderWidth="0.5px"
            bgColor="none"
            _hover={{
              bg: "",
            }}
            _focus={{ outline: 0 }}
            display={{ base: "flex", md: "none" }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex
              mb={{ base: "4px", md: "8px" }}
              display={{ base: "flex", md: "none" }}
              mr={3}
              cursor="pointer"
              onClick={() => navigateTo("/home")}
            >
              <Text fontSize="x-large" fontWeight="400">
                4Nance
              </Text>
              <Text fontSize="lg" mt="8px" ml={1} fontWeight="100">
                Investimentos
              </Text>
            </Flex>
          </HStack>

          <Flex alignItems={"center"}>
            <IconButton
              _focus={{ boxShadow: "none" }}
              bg="none"
              variant="outline"
              mr={4}
              borderRadius="lg"
              icon={<FiBell />}
            />
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <WrapItem>
                    <Avatar size={"sm"} name={user?.user} />
                  </WrapItem>
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">{user?.user}</Text>
                    <Text fontSize="xs" color="gray.600">
                      Investidor
                    </Text>
                  </VStack>
                  <Box pl={2} display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem
                  onClick={() => navigateTo("/business/usuario/perfil")}
                >
                  <FiUser />
                  <Text ml={2}>Perfil</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>
                  <FiLogOut />
                  <Text ml={2}>Deslogar</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {menu.map((m) => (
                <NavLink key={m.name} _menu={m}>
                  {m}
                </NavLink>
              ))}
              <hr />
              <Button
                onClick={() => navigateTo("/investir")}
                size={"sm"}
                leftIcon={<FiTrendingUp />}
                text="Quero Investir"
              />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
