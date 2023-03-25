import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";

import Navbar from "./Navbar";
import SidebarContent from "./Sidebar";
import Footer from "./Footer";
import { isAuthenticated } from "../../../helpers/localStorage";
import { useLayoutEffect } from "react";
import { navigateTo } from "../../../helpers/routes";

const LayoutComponent = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const init = async () => {
    const auth = await isAuthenticated();
    if (!auth) return navigateTo("/business/signin");
  };

  useLayoutEffect(() => {
    init();
  }, []);

  return (
    <>
      <>
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
          <SidebarContent
            onClose={onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          <Navbar onOpen={onOpen} />
          <Box p={4}>
            <Box ml={{ base: 0, md: 60 }} borderRadius="lg" p="4">
              <Alert
                borderRadius={5}
                mb={5}
                variant="left-accent"
                status="warning"
              >
                <AlertIcon />
                Informações de cadastro pendente,
                <Link
                  mx={1}
                  color="primary.500"
                  href="#"
                  onClick={() => navigateTo("/business/completar")}
                >
                  <b>clique aqui</b>
                </Link>
                pra completa-lo.
              </Alert>
              <main>{children}</main>
            </Box>
          </Box>
        </Box>
        <Footer />
      </>
    </>
  );
};

export default LayoutComponent;
