import { useEffect } from "react";
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
  SimpleGrid,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";

import Router from "next/router";

import { investorRegister } from "../../../services/api/auth";
import Button from "../../../components/Button";

import useToast from "../../../helpers/toast";
import {
  handleAccountConfirmation,
  handleLoading,
} from "../../../redux/general/generalSlice";
import useFormHelper from "../../../helpers/form";
import useAxiosValidate from "../../../helpers/errors/axios";
import { setFormData } from "../../../redux/form/formSlice";
import {
  BsBarChart,
  BsCashCoin,
  BsFilePlus,
  BsShieldLock,
} from "react-icons/bs";
import { isAuthenticated } from "../../../helpers/localStorage";
import { navigateTo } from "../../../helpers/routes";

const Signup = () => {
  const dispatch = useDispatch();
  const { handleToast } = useToast();
  const { axiosErrorValidate } = useAxiosValidate();
  const { handleChange, formData } = useFormHelper();

  const init = async () => {
    const auth = await isAuthenticated();
    if (auth) return navigateTo("/home");
  };

  useEffect(async () => {
    init();
  });

  const { mutateAsync: mutateRegister, isLoading } = useMutation(
    (data) => investorRegister(data),
    {
      onSuccess: () => {
        handleToast(
          "Seu cadastro foi efetuado com sucesso!",
          "Um código de verificação foi enviado em seu e-mail, insira ele abaixo.",
          "success",
          9000
        );
        dispatch(handleAccountConfirmation(true));
      },
      onError: (error) => axiosErrorValidate(error),
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(handleLoading(true));

      const { signup } = formData;
      const data = {
        ...signup,
        person_type: "Pessoa Fisica",
        phone_2: null,
        accept_terms: true,
        roles: [
          "49704f2e-cc35-41f7-af71-d766405f6b80",
          "1937cea1-95e7-4f8e-b76b-eff6f7b06a36",
        ],
      };

      await mutateRegister(data);
    } finally {
      dispatch(handleLoading(false));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setFormData({ group: "signup", values: {} }));
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
              <FormControl id="name" isRequired>
                <FormLabel>Nome Completo</FormLabel>
                <Input
                  type="text"
                  group="signup"
                  name="name"
                  value={formData?.signup?.name || ""}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="document">
                <FormLabel>Documento</FormLabel>
                <InputMask
                  mask="999.999.999-99"
                  maskPlaceholder=""
                  group="signup"
                  name="document"
                  value={formData?.signup?.document || ""}
                  onChange={handleChange}
                >
                  <Input type="text" placeholder="___.___.___-__" />
                </InputMask>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  group="signup"
                  name="email"
                  value={formData?.signup?.email || ""}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Telefone</FormLabel>
                <InputMask
                  mask="(99) 9 9999-9999"
                  maskPlaceholder=""
                  group="signup"
                  name="phone_1"
                  value={formData?.signup?.phone_1 || ""}
                  onChange={handleChange}
                >
                  <Input type="text" placeholder="(__) _ ____-____" />
                </InputMask>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  group="signup"
                  name="password"
                  value={formData?.signup?.password || ""}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="cep">
                <FormLabel>CEP </FormLabel>
                <InputMask
                  mask="99999-999"
                  maskPlaceholder=""
                  group="signup"
                  name="cep"
                  value={formData?.signup?.cep || ""}
                  onChange={handleChange}
                >
                  <Input type="text" placeholder="_____-___" />
                </InputMask>
              </FormControl>
              <Button
                isLoading={isLoading}
                loadingText="Um momento..."
                type="submit"
                text="Cadastrar"
              />

              <Center spacing={6}>
                <Text>
                  Ja possui conta?{" "}
                  <Link
                    color="primary.300"
                    href="#!"
                    onClick={() => Router.push("/signin")}
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
