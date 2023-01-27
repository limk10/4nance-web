import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import Navbar from "./Navbar";
import SidebarContent from "./Sidebar";
import Footer from "./Footer";
import { isAuthenticated } from "../../../helpers/localStorage";
import { useEffect } from "react";
import { navigateTo } from "../../../helpers/routes";

const LayoutComponent = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const init = async () => {
    const auth = await isAuthenticated();
    if (!auth) return navigateTo("/signin");
  };

  useEffect(() => {
    init();
  });

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
          <Box px={{ base: 2, md: 8 }}>
            <Box ml={{ base: 0, md: 60 }} pb={10} color="gray.600">
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
