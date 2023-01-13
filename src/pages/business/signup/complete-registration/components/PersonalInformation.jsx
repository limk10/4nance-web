import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
} from "@chakra-ui/react";

import InputMask from "react-input-mask";
import { useMutation, useQuery } from "react-query";
import useFormHelper from "../../../../../helpers/form";
import { getCityList, getStateList } from "../../../../../services/api/address";
import useAxiosValidate from "../../../../../helpers/errors/axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCityList,
  handleStateList,
  useAddress,
} from "../../../../../redux/address/addressSlice";
import { handleLoading } from "../../../../../redux/general/generalSlice";

function PersonalInformation() {
  const dispatch = useDispatch();
  const { handleChange, formData } = useFormHelper();
  const { axiosErrorValidate } = useAxiosValidate();

  const { stateList, cityList } = useSelector(useAddress);

  useQuery(["stateList"], getStateList, {
    onSuccess(data) {
      dispatch(handleStateList(data));
    },
    onError(error) {
      axiosErrorValidate(error);
    },
  });

  const { mutate: mutateCityList, isLoading: isLoadingCityList } = useMutation(
    ["getStateList"],
    (id) => getCityList(id),
    {
      onSuccess(data) {
        dispatch(handleCityList(data));
      },
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  useEffect(() => {
    if (!formData?.personData?.state) return;
    const {
      personData: { state },
    } = formData;

    if (state) mutateCityList(state);
  }, [formData?.personData?.state]);

  useEffect(() => {
    dispatch(handleLoading(isLoadingCityList));
  }, [isLoadingCityList]);

  return (
    <>
      <Box mt={5}>
        <HStack spacing={3}>
          <FormControl id="name" isRequired>
            <FormLabel>Nome</FormLabel>
            <Input
              id="name"
              name="name"
              group="personData"
              value={formData?.personData?.name || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="last_name" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData?.personData?.email || ""}
              disabled
            />
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="cpf" isRequired>
            <FormLabel>CPF</FormLabel>
            <InputMask
              mask="999.999.999-99"
              maskPlaceholder=""
              name="document"
              value={formData?.personData?.document || ""}
              disabled
            >
              <Input type="text" placeholder="___.___.___-__" />
            </InputMask>
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Telefone 1</FormLabel>
            <InputMask
              mask="(99) 9 9999-9999"
              maskPlaceholder=""
              group="personData"
              name="phone_1"
              value={formData?.personData?.phone_1 || ""}
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
              group="personData"
              name="phone_2"
              value={formData?.personData?.phone_2 || ""}
              onChange={handleChange}
            >
              <Input type="text" placeholder="(__) _ ____-____" />
            </InputMask>
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="zipcode" isRequired>
            <FormLabel>CEP</FormLabel>
            <InputMask
              mask="99999-999"
              maskPlaceholder=""
              group="personData"
              name="cep"
              value={formData?.personData?.cep || ""}
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
              group="personData"
              value={formData?.personData?.state || ""}
              onChange={handleChange}
            >
              {stateList.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="city" isRequired>
            <FormLabel>Cidade</FormLabel>
            <Select
              name="city"
              placeholder="Selecione uma cidade"
              group="personData"
              value={formData?.personData?.city || ""}
              onChange={handleChange}
            >
              {cityList.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="address" isRequired>
            <FormLabel>Endereço</FormLabel>
            <Input
              id="address"
              name="address"
              group="personData"
              value={formData?.personData?.address || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="number" isRequired>
            <FormLabel>Número</FormLabel>
            <Input
              type="number"
              id="number"
              name="number"
              group="personData"
              value={formData?.personData | ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="district" isRequired>
            <FormLabel>Bairro</FormLabel>
            <Input
              id="district"
              name="district"
              group="personData"
              value={formData?.personData?.district || ""}
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
              group="personData"
              value={formData?.personData?.complement || ""}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>
      </Box>
    </>
  );
}

export default PersonalInformation;
