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

const LayoutComponent = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Box px={{ base: 2, md: 8 }}>
          <Box ml={{ base: 0, md: 60 }} pb={10}>
            <main>{children}</main>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LayoutComponent;