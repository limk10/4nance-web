import { Stack, Flex, Text, Box } from "@chakra-ui/react";

export default function InfoCard({ title, text, icon, ...rest }) {
  return (
    <Box h="full" bg="white" borderRadius={"md"} shadow="md" p={5}>
      <Stack {...rest}>
        <Flex>
          {icon && (
            <Flex
              w={16}
              h={16}
              mr={5}
              align={"center"}
              justify={"center"}
              color={"primary.300"}
              rounded={"full"}
              bg={"gray.700"}
            >
              {icon}
            </Flex>
          )}

          <Flex direction="column">
            <Text fontSize="xl" fontWeight={600}>
              {title}
            </Text>
            <Text fontSize="md" color={"gray.600"}>
              {text}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}
