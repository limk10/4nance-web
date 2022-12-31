import { Box, Flex, ScaleFade } from "@chakra-ui/react";

import { Ring } from "@uiball/loaders";
import { useGeneral } from "../../redux/general/generalSlice";
import { useSelector } from "react-redux";

const LoadingScreen = () => {
  const { loading } = useSelector(useGeneral);
  return (
    <>
      {loading && (
        <Box
          pos="fixed"
          w="100%"
          h="100vh"
          zIndex={1600}
          bg="rgba(71, 71, 71, 0.6)"
          backdropFilter="blur(5px)"
          transition="1s all"
        >
          <Flex justifyContent="center" alignItems="center" h="100vh">
            <ScaleFade initialScale={0.9} in={true}>
              <Ring size={75} lineWeight={5} speed={2} color="#FEFEFE" />
            </ScaleFade>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default LoadingScreen;
