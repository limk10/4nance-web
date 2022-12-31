import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { FiPieChart, FiBarChart, FiDollarSign, FiUsers } from "react-icons/fi";
import Button from "../../../components/Button";

const Sidebar = ({ onClose, ...rest }) => {
  const router = useRouter();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FiPieChart,
      submenu: [],
    },
    {
      name: "Investimentos",
      path: "/investir",
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
  ];

  const isMenuAcvite = (path) => {
    return menu.find(() => router.asPath.includes(path));
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
          role="group"
          align="center"
          px="4"
          py="3"
          cursor="pointer"
          borderRightWidth={isMenuAcvite(path) ? "2px" : ""}
          borderRightColor={isMenuAcvite(path) ? "primary.300" : ""}
          color={isMenuAcvite(path) ? "primary.300" : "blackAlpha.500"}
          letterSpacing={1}
          fontSize="15"
          _hover={{
            color: "primary.300",
            transition: "0.1s all",
            borderRightWidth: "2px",
            borderRightColor: "primary.300",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="22"
              color={isMenuAcvite(path) ? "primary.300" : ""}
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
        bg="white"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex
          height="4rem"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "center" }}
          bg="white"
          mb={9}
          px={5}
          mt={2}
        >
          <Flex flexDir="column" w="100%">
            <Flex>
              <Text color="primary.300" fontSize="5xl" fontWeight="900">
                .4
              </Text>
              <Text
                color="blackAlpha.800"
                fontSize="4xl"
                mt={3.5}
                fontWeight="400"
              >
                Nance
              </Text>
            </Flex>
            <Text color="blackAlpha.600" fontSize="xl" mt={-4} fontWeight="400">
              para investidores
            </Text>
          </Flex>

          <CloseButton
            display={{ base: "flex", md: "none" }}
            color={"white"}
            size={16}
            onClick={onClose}
          />
        </Flex>

        <Box height="90vh" overflow="auto">
          {menu.map((link) => (
            <NavItem key={link.name} icon={link.icon} {...link}>
              {link.name}
            </NavItem>
          ))}

          {/* {!completePerfil ? (
          <Alert status="warning" mt={10} position="absolute" bottom={5}>
            <AlertIcon />
            <VStack>
              <AlertDescription fontSize="sm">
                Informações de cadastro pendente, clique no botão abaixo para
                completa-lo!
              </AlertDescription>
              <Button
                onClick={() => navigateTo("/completar-cadastro")}
                size="sm"
                text="Completar cadastro"
              />
            </VStack>
          </Alert>
        ) : (
          <Flex
            bg="blackAlpha.50"
            py={3}
            px={3}
            pt="80px"
            borderRadius="md"
            flexDir="column"
            position="absolute"
            bottom={5}
            ml={3}
            w="90%"
          >
            <Image
              w="75%"
              h="auto"
              top="-90px"
              pos="absolute"
              ml={5}
              src="https://firebasestorage.googleapis.com/v0/b/stcar-automotive.appspot.com/o/Piggy%20bank-amico.svg?alt=media&token=ec2daebd-ce5a-445a-874f-ec42861dcc1c"
            />
            <Text
              textAlign="center"
              mb={3}
              color="blackAlpha.600"
              fontSize="sm"
            >
              Escolha entre várias modalidades de investimentos, todos do mundo
              real e 100% de confiança!
            </Text>
            <Button
              onClick={() => {
                onClose();
                navigateTo("/investir");
              }}
              scheme="primary"
              text="Quero investir"
              w="100%"
              h="5vh"
              fontWeight="600"
            />
          </Flex>
        )} */}
          <Flex
            px={3}
            pt="50px"
            flexDir="column"
            position="relative"
            marginTop="100%"
            pb="10vh"
          >
            <Image
              w="75%"
              h="auto"
              top="-140px"
              pos="absolute"
              ml={5}
              src="https://firebasestorage.googleapis.com/v0/b/stcar-automotive.appspot.com/o/Piggy%20bank-amico.svg?alt=media&token=ec2daebd-ce5a-445a-874f-ec42861dcc1c"
            />
            <Text
              textAlign="center"
              mb={5}
              color="blackAlpha.600"
              fontSize="sm"
            >
              Escolha entre várias modalidades de investimentos, todos do mundo
              real e 100% de confiança!
            </Text>
            <Button
              onClick={() => {
                onClose();
                navigateTo("/investir");
              }}
              scheme="primary"
              text="Quero investir"
              w="100%"
              h="5vh"
              fontWeight="600"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
