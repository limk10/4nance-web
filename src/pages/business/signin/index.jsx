import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { GoogleLogin } from "react-google-login";
import { useMutation } from "react-query";
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";

import Router from "next/router";

import { signin } from "../../../services/api/auth";
import { handleAccountConfirmation } from "../../../redux/general/generalSlice";
import useToast from "../../../helpers/toast";
import useFormHelper from "../../../helpers/form";
import { setFormData } from "../../../redux/form/formSlice";

const Singin = () => {
  const dispatch = useDispatch();
  const [handleToast] = useToast();
  const [handleChange, formData] = useFormHelper();

  // Simulação de uma request POST com axios
  const { mutate: postSignin, isLoading } = useMutation(
    (data) => signin(data),
    {
      onSuccess: () => {
        Router.push("/business/home");
      },
      onError: (err) => {
        const {
          response: {
            data: { error },
          },
        } = err;

        if (error.includes("E-mail não verificado")) {
          handleToast("Ops...", error, "error", 9000);
          dispatch(handleAccountConfirmation(true));
        } else {
          handleToast(
            "Ops...",
            "E-mail ou senha estão incorretos.",
            "error",
            9000
          );
        }
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { signin } = formData;
    const data = {
      ...signin,
    };
    postSignin(data);
  };

  useEffect(() => {
    return () => {
      dispatch(setFormData({ group: "signin", values: {} }));
    };
  }, []);

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
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  group="signin"
                  name="email"
                  value={formData?.signin?.email || ""}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  group="signin"
                  name="password"
                  value={formData?.signin?.password || ""}
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
                  w={["100%", "30%"]}
                  text="Entrar"
                />
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
