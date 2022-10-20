import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import InputMask from "react-input-mask";
import { useMutation, useQuery } from "react-query";
import useFormHelper from "../../../../../helpers/form";
import {
  getCityList,
  getStateList,
  stateList,
} from "../../../../../services/api/address";
import useAxiosValidate from "../../../../../helpers/errors/axios";
import { useEffect } from "react";

function PersonalInformation() {
  const [handleChange, formData] = useFormHelper();
  const [axiosErrorValidate] = useAxiosValidate();

  useQuery(["stateList"], getStateList, {
    onSuccess(data) {
      console.log("getStateList", data);
    },
    onError(error) {
      axiosErrorValidate(error);
    },
  });

  const { mutate: cityList } = useMutation(
    ["getStateList"],
    (id) => getCityList(id),
    {
      onSuccess(data) {
        console.log("getCityList", data);
      },
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  useEffect(() => {
    cityList("e2f8279c-6963-47df-910e-129474acc328");
  }, []);

  return (
    <>
      <Box mt={5}>
        <HStack spacing={3}>
          <FormControl id="name" isRequired>
            <FormLabel>Nome</FormLabel>
            <Input
              id="name"
              name="name"
              group="completeRegistration"
              value={formData?.completeRegistration?.name || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="last_name" isRequired>
            <FormLabel>Sobrenome</FormLabel>
            <Input
              id="last_name"
              name="lastName"
              group="completeRegistration"
              value={formData?.completeRegistration?.lastName || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="last_name" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              group="completeRegistration"
              value={formData?.completeRegistration?.email || ""}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="cpf" isRequired>
            <FormLabel>CPF</FormLabel>
            <InputMask
              mask="999.999.999-99"
              maskPlaceholder=""
              group="completeRegistration"
              name="document"
              value={formData?.completeRegistration?.document || ""}
              onChange={handleChange}
            >
              <Input type="text" placeholder="___.___.___-__" />
            </InputMask>
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Telefone 1</FormLabel>
            <InputMask
              mask="(99) 9 9999-9999"
              maskPlaceholder=""
              group="completeRegistration"
              name="phone_1"
              value={formData?.completeRegistration?.phone_1 || ""}
              onChange={handleChange}
            >
              <Input type="text" placeholder="(__) _ ____-____" />
            </InputMask>
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Telefone 2</FormLabel>
            <InputMask
              mask="(99) 9 9999-9999"
              maskPlaceholder=""
              group="completeRegistration"
              name="phone_2"
              value={formData?.completeRegistration?.phone_2 || ""}
              onChange={handleChange}
            >
              <Input type="text" placeholder="(__) _ ____-____" />
            </InputMask>
          </FormControl>
        </HStack>
        {/* <HStack spacing={3} mt={3}>
          <FormControl id="dob" isRequired>
            <FormLabel>Data de nascimento</FormLabel>
            <InputMask
              mask="(99) 9 9999-9999"
              maskPlaceholder=""
              group="completeRegistration"
              name="phone_2"
              value={formData?.completeRegistration?.phone_2 || ""}
              onChange={handleChange}
            >
              <Input type="text" placeholder="__/__/____" />
            </InputMask>
          </FormControl>
          <FormControl id="nacionality" isRequired>
            <FormLabel>Nacionalidade</FormLabel>
            <Select
              name="nacionality"
              onChange={() => {}}
              value=""
              placeholder="Selecione uma nacionalidade"
            >
              <option value={0}>Brasileiro</option>
              <option value={1}>Naturalizado</option>
            </Select>
          </FormControl>
          <FormControl id="genre" isRequired>
            <FormLabel>Genêro</FormLabel>
            <Select
              name="genre"
              onChange={() => {}}
              value=""
              placeholder="Selecione seu genêro"
            >
              <option value={0}>Masculino</option>
              <option value={1}>Feminino</option>
              <option value={2}>Outros</option>
            </Select>
          </FormControl>
        </HStack> */}
        <HStack spacing={3} mt={3}>
          <FormControl id="zipcode" isRequired>
            <FormLabel>CEP</FormLabel>
            <InputMask
              mask="99999-999"
              maskPlaceholder=""
              group="completeRegistration"
              name="cep"
              value={formData?.completeRegistration?.cep || ""}
              onChange={handleChange}
            >
              <Input type="text" placeholder="_____-___" />
            </InputMask>
          </FormControl>
          <FormControl id="state" isRequired>
            <FormLabel>Estado/Provincia</FormLabel>
            <Select
              name="state"
              placeholder="Selecione um estado"
              group="completeRegistration"
              value={formData?.completeRegistration?.state || ""}
              onChange={handleChange}
            >
              <option value={0}>Mato Grosso</option>
              <option value={1}>Mato Grosso do Sul</option>
              <option value={2}>Minas Gerais</option>
              <option value={3}>São Paulo</option>
              <option value={4}>Rio de Janeiro</option>
            </Select>
          </FormControl>
          <FormControl id="city" isRequired>
            <FormLabel>Cidade</FormLabel>
            <Select
              name="city"
              placeholder="Selecione um estado"
              group="completeRegistration"
              value={formData?.completeRegistration?.city || ""}
              onChange={handleChange}
            >
              <option value={3}>São Paulo</option>
              <option value={4}>Rio de Janeiro</option>
            </Select>
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="address" isRequired>
            <FormLabel>Endereço</FormLabel>
            <Input id="address" name="address" value="" onChange={() => {}} />
          </FormControl>
          <FormControl id="number" isRequired>
            <FormLabel>Número</FormLabel>
            <Input
              type="number"
              id="number"
              name="number"
              group="completeRegistration"
              value={formData?.completeRegistration?.number || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="district" isRequired>
            <FormLabel>Bairro</FormLabel>
            <Input
              id="district"
              name="district"
              group="completeRegistration"
              value={formData?.completeRegistration?.district || ""}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="complement">
            <FormLabel>Complemento</FormLabel>
            <Input
              id="complement"
              name="complement"
              group="completeRegistration"
              value={formData?.completeRegistration?.complement || ""}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>
      </Box>
    </>
  );
}

export default PersonalInformation;
