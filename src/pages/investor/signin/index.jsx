import { useEffect } from "react";
import { useMutation } from "react-query";
import {
  BsBarChart,
  BsShieldLock,
  BsCashCoin,
  BsFilePlus,
} from "react-icons/bs";
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
import Button from "../../../components/Button";

import Router from "next/router";

import { investorSignin } from "../../../services/api/auth";
import {
  handleAccountConfirmation,
  handleLoading,
} from "../../../redux/general/generalSlice";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../redux/form/formSlice";
import useFormHelper from "../../../helpers/form";
import useToast from "../../../helpers/toast";
import { isAuthenticated } from "../../../helpers/localStorage";
import { navigateTo } from "../../../helpers/routes";

const Singin = () => {
  const dispatch = useDispatch();
  const { handleToast } = useToast();
  const { handleChange, formData } = useFormHelper();

  const init = async () => {
    const auth = await isAuthenticated();
    if (auth) return navigateTo("/home");
  };

  useEffect(() => {
    init();
  });

  // Simulação de uma request POST com axios
  const { mutateAsync: mutateSignin } = useMutation(
    (data) => investorSignin(data),
    {
      onSuccess: () => {
        Router.push("/home");
      },
      onError: (err) => {
        const {
          response: {
            data: { error },
          },
        } = err;
        console.log("error", error.includes("E-mail não verificado"));
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
    try {
      dispatch(handleLoading(true));
      const { signin } = formData;
      const data = {
        ...signin,
      };

      await mutateSignin(data);
    } catch (err) {
      console.log("err --", err);
    } finally {
      dispatch(handleLoading(false));
    }
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
                <Text fontSize="3xl" fontWeight="500" mr="2">
                  4Nance
                </Text>
                <Text fontSize="xl" mt="1.5">
                  Investimentos alternativos
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
                  loadingText="Um momento..."
                  type="submit"
                  w={["100%", "30%"]}
                  text="Entrar"
                />
              </Flex>
              <Center spacing={6}>
                <Text>
                  Ainda não possui conta?{" "}
                  <Link
                    color="primary.300"
                    href="#!"
                    onClick={() => Router.push("/signup")}
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
