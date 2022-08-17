import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { GoogleLogin } from "react-google-login";
import { useMutation } from "react-query";
import {
  BsBarChart,
  BsShieldLock,
  BsCashCoin,
  BsFilePlus,
} from "react-icons/bs";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

import Router from "next/router";

import { addToLocalStorage } from "../../../helpers/localStorage";
import { signinSchema, handleMessage } from "../../../helpers/validade";

import axios from "axios";

const Singin = () => {
  const [form, setForm] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Simulação de uma request POST com axios
  const { isLoading, mutate: postRegister } = useMutation(
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return {
        name: "Matheus Lopes",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        refreshToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      };
    },
    {
      onSuccess: (res) => {
        const { name, ...rest } = res;
        addToLocalStorage(import.meta.env.VITE_REACT_APP_USER, { name });
        addToLocalStorage(import.meta.env.VITE_REACT_APP_AUTH, rest);

        window.location.reload();
      },
      onError: (err) => {
        console.log("err", err);
      },
    }
  );

  const username = "17b271f2-2c76-4240-a0d7-46f57e919ca3";
  const password = "741d5db9-c596-41b4-8785-1d50367224c8";

  function parseXmlToJson(xml) {
    const json = {};
    for (const res of xml.matchAll(
      /(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm
    )) {
      const key = res[1] || res[3];
      const value = res[2] && parseXmlToJson(res[2]);
      json[key] = (value && Object.keys(value).length ? value : res[2]) || null;
    }
    return json;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    return Router.push("/business/home");
    try {
      await signinSchema.validate(form, { abortEarly: false });
      postRegister();
    } catch (err) {
      if (err?.errors?.length) handleMessage(err?.errors);
    }
  };

  // const responseGoogle = ({ profileObj, tokenObj }) => {
  //   if (profileObj && tokenObj) {
  //     addToLocalStorage(import.meta.env.VITE_REACT_APP_USER, {
  //       name: profileObj.name,
  //     });
  //     addToLocalStorage(import.meta.env.VITE_REACT_APP_AUTH, {
  //       token: tokenObj.access_token,
  //       refreshToken: tokenObj.login_hint,
  //     });

  //     window.location.reload();
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
          <Flex flex={1.3}>
            <Flex
              bgColor="gray.900"
              color="#fff"
              direction="column"
              w="full"
              px="14"
              py="20"
              justify="space-between"
            >
              <Flex align="center">
                <Text fontSize="xx-large" fontWeight="500" mr="2">
                  4Nance
                </Text>
                <Text fontSize="2xl" mt="1">
                  for business
                </Text>
              </Flex>
              <Flex direction="column">
                <Flex align="start" flexDirection="column" mb={7}>
                  <Text fontSize="2xl">Gerencie e administre seus </Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    PROJETOS E INVESTIDORES
                  </Text>
                  <Text color="primary.300" fontSize="3xl" fontWeight="bold">
                    NA PALMA DE SUAS MÃOS!
                  </Text>
                </Flex>
              </Flex>
              <Flex></Flex>
            </Flex>
          </Flex>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"xl"}>
              <Heading fontSize="3xl" fontWeight="100">
                Log in.
              </Heading>
              <Text className="text-muted" color="gray.600">
                Entre com os dados inseridos durante o seu cadastro
              </Text>
              <FormControl id="email">
                <FormLabel>E-mail *</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={form?.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha *</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={form?.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Flex
                justify="space-between"
                align="center"
                direction={["column", "row"]}
              >
                <Link marginBottom={[3, 0]} href="#!" onClick={() => {}}>
                  Esqueceu sua senha?
                </Link>
                <Button
                  isLoading={isLoading}
                  loadingText="Um momento..."
                  type="submit"
                  w={["100%", "20%"]}
                >
                  Entrar
                </Button>
              </Flex>
              {/* <GoogleLogin
                clientId="876501571825-2d8ijl96jtjto6lv4ns0ab7hfpvemu7m.apps.googleusercontent.com"
                buttonText="Entrar com o Google"
                render={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    mt={0}
                    leftIcon={<FcGoogle />}
                  >
                    Login com Google
                  </Button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              /> */}
              <Center spacing={6}>
                <Text>
                  Ainda não possui conta?{" "}
                  <Link
                    color="primary.300"
                    href="#!"
                    onClick={() => Router.push("/business/signup")}
                  >
                    Abrir Conta!
                  </Link>{" "}
                </Text>
              </Center>
            </Stack>
          </Flex>
        </Stack>
      </form>
    </>
  );
};

export default Singin;
