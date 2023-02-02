import {
  Avatar,
  AvatarBadge,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import Button from "../../../components/Button";

import Layout from "../layout";

export default function Profile() {
  return (
    <Stack
      spacing={4}
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      boxShadow={"lg"}
      p={6}
      my={12}
    >
      <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
        Minhas informações
      </Heading>
      <FormControl id="userName">
        <Stack direction={["column"]} spacing={6}>
          <Center>
            <Avatar size="xl" src="https://bit.ly/sage-adebayo">
              <AvatarBadge
                as={IconButton}
                size="sm"
                rounded="full"
                top="-10px"
                colorScheme="red"
                aria-label="remove Image"
                icon={<FiX />}
              />
            </Avatar>
          </Center>
          <Center w="full">
            <Button onClick={() => {}} variant="outline" text="Alterar Foto" />
            {/* <Button w="sm">Change Icon</Button> */}
          </Center>
        </Stack>
      </FormControl>
      <FormControl id="userName" isRequired>
        <FormLabel>User name</FormLabel>
        <Input
          placeholder="UserName"
          _placeholder={{ color: "gray.500" }}
          type="text"
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          placeholder="your-email@example.com"
          _placeholder={{ color: "gray.500" }}
          type="email"
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="password"
          _placeholder={{ color: "gray.500" }}
          type="password"
        />
      </FormControl>
      {/* <Stack spacing={6} direction={["column", "row"]}>
        <Button
          bg={"red.400"}
          color={"white"}
          w="full"
          _hover={{
            bg: "red.500",
          }}
        >
          Cancel
        </Button>
        <Button
          bg={"blue.400"}
          color={"white"}
          w="full"
          _hover={{
            bg: "blue.500",
          }}
        >
          Submit
        </Button>
      </Stack> */}
      <Flex width="100%" justify="space-between" mt={7}>
        <Button mr={4} onClick={() => {}} variant="outline" text="Voltar" />
        <Button type="submit" text="Salvar Perfil" />
      </Flex>
    </Stack>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
