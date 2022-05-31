import {
  Stack,
  Flex,
  Text,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

export default function InfoCard({ title, text, up, icon, ...rest }) {
  return (
    <Box h="full" bg="white" borderRadius={"md"} shadow="md" px={5} py={4}>
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
            <Stat>
              <StatLabel>{text}</StatLabel>
              <StatNumber>{title}</StatNumber>
              <StatHelpText>
                <StatArrow type={up ? "increase" : "decrease"} />
                23.36%
              </StatHelpText>
            </Stat>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}
