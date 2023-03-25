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
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";

import Router from "next/router";

import { businessRegister } from "../../../services/api/auth";
import Button from "../../../components/Button";

import useToast from "../../../helpers/toast";
import {
  handleAccountConfirmation,
  handleLoading,
} from "../../../redux/general/generalSlice";
import useFormHelper from "../../../helpers/form";
import useAxiosValidate from "../../../helpers/errors/axios";
import { setFormData } from "../../../redux/form/formSlice";
import { isAuthenticated } from "../../../helpers/localStorage";
import { navigateTo } from "../../../helpers/routes";
import { clearSpecialCharacters } from "../../../helpers/format";

const Signup = () => {
  const dispatch = useDispatch();
  const { handleToast } = useToast();
  const { axiosErrorValidate } = useAxiosValidate();
  const { handleChange, formData } = useFormHelper();

  const init = async () => {
    const auth = await isAuthenticated();
    if (auth) return navigateTo("/business/home");
  };

  useEffect(() => {
    init();
  }, []);

  const { mutate: mutateRegister, isLoading } = useMutation(
    (data) => businessRegister(data),
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
    const { signup } = formData;
    const { document, phone_1 } = signup;
    console.log();

    const data = {
      ...signup,
      document: clearSpecialCharacters(document),
      phone_1: clearSpecialCharacters(phone_1),
      person_type: "Pessoa Fisica",
      phone_2: null,
      accept_terms: true,
      roles: [
        "49704f2e-cc35-41f7-af71-d766405f6b80",
        "1937cea1-95e7-4f8e-b76b-eff6f7b06a36",
      ],
    };

    mutateRegister(data);
  };

  useEffect(() => {
    return () => {
      dispatch(setFormData({ group: "signup", values: {} }));
    };
  }, []);

  useEffect(() => {
    dispatch(handleLoading(isLoading));
  }, [isLoading]);

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
              <FormControl id="document" isRequired>
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
              <FormControl id="phone" isRequired>
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
              <FormControl id="cep" isRequired>
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
