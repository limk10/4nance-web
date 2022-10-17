import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  WrapItem,
} from "@chakra-ui/react";

import Router from "next/router";

import { FiMenu, FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";
import {
  getKeyToken,
  getLocalStorage,
  removeAuthLocalStorage,
} from "../../../helpers/localStorage";
import { navigateTo } from "../../../helpers/routes";

const MobileNav = ({ onOpen, ...rest }) => {
  const getUser = () => {
    const tokenKey = getKeyToken();
    const localAuth = getLocalStorage(tokenKey);

    if (!localAuth) return;
    const { user } = JSON.parse(localAuth);
    return user;
  };

  const logout = () => {
    const tokenKey = getKeyToken();
    removeAuthLocalStorage(tokenKey);
    location.reload();
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="4rem"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        bgColor="white"
        icon={<FiMenu />}
      />
      {/* <Text display={{ base: "flex", md: "none" }} fontSize="2xl">
        Sendify Center
      </Text> */}
      <Image
        display={{ base: "flex", md: "none" }}
        width="8rem"
        src="/logo-default.svg"
        alt="logo-4nance"
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <WrapItem>
                  <Avatar
                    size={"sm"}
                    name={getUser()}
                    // src="https://bit.ly/tioluwani-kolawole"
                  />
                </WrapItem>
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{getUser()}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Empresário
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
              <MenuItem onClick={() => navigateTo("/business/usuario/perfil")}>
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
      </HStack>
    </Flex>
  );
};

export default MobileNav;
