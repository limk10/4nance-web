import { Box, Text, useColorModeValue, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      px={10}
      pt={2}
      pb={2}
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex justify="flex-end">
        <Text fontSize="sm" align="right" color="blackAlpha.600">© 2022 - 4Nance Investimentos Alternativos.</Text>
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
