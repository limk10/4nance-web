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

import { FiMenu, FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";
import useAuth from "../../../helpers/auth";
import { navigateTo } from "../../../helpers/routes";

const MobileNav = ({ onOpen, ...rest }) => {
  const [user, logout] = useAuth();

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
      <Image
        display={{ base: "flex", md: "none" }}
        width="8rem"
        src="/logo-default.svg"
        alt="logo-4nance"
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
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
              <MenuItem onClick={() => navigateTo("/business/profile")}>
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
