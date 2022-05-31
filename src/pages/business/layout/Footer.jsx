import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex py={2} px={10} justify="flex-end">
        <Text align="right">© 2022 - 4Nance Investimentos Alternativos.</Text>
        {/* <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack> */}
      </Flex>
    </Box>
  );
}
