import { Stack, Flex, Text } from "@chakra-ui/react";

export default function Feature({ title, text, icon, ...rest }) {
  return (
    <Stack {...rest}>
      <Flex>
        <Flex w={20} h={20} mr={3}>
          {icon}
        </Flex>

        <Flex direction="column">
          <Text fontWeight={600}>{title}</Text>
          <Text color={"gray.600"}>{text}</Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
