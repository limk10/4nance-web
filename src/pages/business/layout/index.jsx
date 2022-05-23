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
    </>
  );
};

export default LayoutComponent;
