import { useState } from "react";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
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
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

import Router from "next/router";

import { addToLocalStorage } from "../../../helpers/localStorage";
import { signupSchema, handleMessage } from "../../../helpers/validade";
// import axios from "../../services/api";

const Signup = () => {
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
        name: form?.name,
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

        Swal.fire({
          title: `Olá, ${name}`,
          html: "Seja bem vindo(a) <br/> Em instantes você será redirecionado ao seu painel!",
          icon: "success",
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      onError: (err) => {
        console.log("err", err);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupSchema.validate(form, { abortEarly: false });
      postRegister();
    } catch (err) {
      if (err?.errors?.length) handleMessage(err?.errors);
    }
  };

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
                <Flex align="center" textAlign="left" mb={7}>
                  <Text fontSize="2xl">Invista em projetos sólidos da</Text>
                  <Text
                    color="primary.300"
                    fontSize="3xl"
                    fontWeight="500"
                    ml="2"
                  >
                    Economia Real
                  </Text>
                </Flex>
                <Flex>
                  <SimpleGrid columns={2} spacing={5}>
                    <Flex align="center">
                      <BsFilePlus size="2.5rem" color="#ffc709" />
                      <Text ml={4} fontSize="sm" w="full">
                        Mais de <b>50 projetos da economia real</b>,
                        criteriosamente selecionados para investimento
                      </Text>
                    </Flex>
                    <Flex align="center">
                      <BsBarChart size="2.5rem" color="#ffc709" />
                      <Text ml={4} fontSize="sm" w="full">
                        <b>Segurança</b> de um mercado regulado pela ICVM 588 de
                        2017
                      </Text>
                    </Flex>
                    <Flex align="center">
                      <BsShieldLock size="2.5rem" color="#ffc709" />
                      <Text ml={4} fontSize="sm" w="full">
                        Projetos com <b>alta rentabilidade</b>, taxa zero e
                        baixa correlação com a bolsa de valores
                      </Text>
                    </Flex>
                    <Flex align="center">
                      <BsCashCoin size="2.5rem" color="#ffc709" />
                      <Text ml={4} fontSize="sm" w="full">
                        <b>Mais de 100 milhões</b> captados e 100% dos
                        relatórios em dia
                      </Text>
                    </Flex>
                  </SimpleGrid>
                </Flex>
              </Flex>
              <Flex></Flex>
            </Flex>
          </Flex>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"xl"}>
              <Heading fontSize="3xl" fontWeight="100">
                Cadastro
              </Heading>
              <Text className="text-muted" color="gray.600">
                Informe seus dados cadastrais abaixo
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
              <FormControl id="name">
                <FormLabel>Nome Completo *</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={form?.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Telefone</FormLabel>
                <Input
                  type="text"
                  placeholder="(__) _ ____-____"
                  name="phone_number"
                  value={form?.phone_number}
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
              <FormControl id="company-name">
                <FormLabel>Nome da Empresa</FormLabel>
                <Input
                  type="text"
                  name="company_name"
                  value={form?.company_name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="cep">
                <FormLabel>CEP </FormLabel>
                <Input
                  type="text"
                  placeholder="_____-___"
                  name="cep"
                  value={form?.cep}
                  onChange={handleChange}
                />
              </FormControl>
              <HStack>
                <FormControl id="address">
                  <FormLabel>Endereço</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    value={form?.address}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="number">
                  <FormLabel>Número</FormLabel>
                  <Input
                    type="text"
                    name="number"
                    value={form?.number}
                    onChange={handleChange}
                  />
                </FormControl>
              </HStack>
              <Button
                isLoading={isLoading}
                loadingText="Um momento..."
                type="submit"
                colorScheme={"red"}
              >
                Cadastrar
              </Button>

              <Center spacing={6}>
                <Text>
                  Ja possui conta?{" "}
                  <Link
                    color="primary.300"
                    href="#!"
                    onClick={() => Router.push("/business/signin")}
                  >
                    Entrar!
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

export default Signup;
