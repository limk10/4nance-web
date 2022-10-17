import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Flex,
  Button,
} from "@chakra-ui/react";

import Navbar from "./Navbar";
import SidebarContent from "./Sidebar";
import Footer from "./Footer";
import { isAuthenticated } from "../../../helpers/localStorage";
import { useEffect } from "react";
import { navigateTo } from "../../../helpers/routes";

const LayoutComponent = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigateTo("/business/signin");
    }
  }, []);

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
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
        {/* mobilenav */}
        <Navbar onOpen={onOpen} />
        <Box p={4}>
          <Box
            // bg={useColorModeValue("white", "gray.800")}
            ml={{ base: 0, md: 60 }}
            borderRadius="lg"
            p="4"
          >
            <main>{children}</main>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LayoutComponent;
