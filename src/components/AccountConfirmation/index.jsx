import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  PinInput,
  PinInputField,
  HStack,
  Text,
  Box,
  VStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { accountConfirmation, signin } from "../../services/api/auth";
import { useMutation } from "react-query";
import Router from "next/router";
import {
  handleAccountConfirmation,
  handleLoading,
  useGeneral,
} from "../../redux/general/generalSlice";

import useToast from "../../helpers/toast";
import useFormHelper from "../../helpers/form";
import useAxiosValidate from "../../helpers/errors/axios";

function AccountConfirmation() {
  const dispatch = useDispatch();
  const [handleToast] = useToast();
  const [axiosErrorValidate] = useAxiosValidate();
  const [{}, formData] = useFormHelper();

  const { modalAccountConfirm } = useSelector(useGeneral);

  const { mutate: postSignin, isLoading: isLoadingSignin } = useMutation(
    (data) => signin(data),
    {
      onSuccess: () => {
        Router.push("/business/home");
      },
      onError: (error) => {
        handleToast(
          "Ops...",
          "E-mail ou senha estão incorretos.",
          "error",
          9000
        );
      },
      onSettled: () => dispatch(handleAccountConfirmation(false)),
    }
  );

  const {
    mutate: postAccountConfirmation,
    isLoading: isLoadingAccountConfirmation,
  } = useMutation((data) => accountConfirmation(data), {
    onSuccess: (resp) => {
      handleToast(
        "Cadastro ativado com sucesso",
        "Estamos preparando seu dashboard, um segundo...",
        "success",
        9000
      );

      setTimeout(() => {
        const data = {
          email: formData?.signin?.email || formData?.signup?.email,
          password: formData?.signin?.password || formData?.signup?.password,
        };

        postSignin(data);
      }, 2000);
    },
    onError: (error) => axiosErrorValidate(error),
  });

  const handleChange = (e) => {
    if (e.length === 4) {
      const data = {
        email: formData?.signin?.email || formData?.signup?.email,
        code: e,
      };
      postAccountConfirmation(data);
    }
  };

  useEffect(() => {
    dispatch(handleLoading(isLoadingAccountConfirmation));
  }, [isLoadingAccountConfirmation]);

  return (
    <>
      <Modal
        isOpen={modalAccountConfirm}
        onClose={() => dispatch(handleAccountConfirmation(false))}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3} align="start" mb={5}>
              <Heading fontSize="3xl" fontWeight="100">
                Falta pouco
              </Heading>
              <Text className="text-muted" color="gray.600">
                Precisamos que você confirme o código enviado em seu e-mail
              </Text>
            </VStack>
            <Center>
              <HStack spacing={2}>
                <PinInput onChange={handleChange} size="lg">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </ModalBody>

          <ModalFooter>
            {/* <Button variant="gosth" mr={3} onClick={onClose} text="Depois" /> */}
            {/* <Button text="Ativar minha conta" /> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AccountConfirmation;
