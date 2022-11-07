import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Select,
  InputGroup,
  InputLeftAddon,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

import InputMask from "react-input-mask";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import useAxiosValidate from "../../../../../helpers/errors/axios";
import useFormHelper from "../../../../../helpers/form";
import {
  handleCityList,
  handleStateList,
  useAddress,
} from "../../../../../redux/address/addressSlice";
import { handleLoading } from "../../../../../redux/general/generalSlice";
import { getCityList, getStateList } from "../../../../../services/api/address";

export default function CaptureEmployeeForm() {
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
    if (!formData?.captation?.state) return;
    const {
      captation: { state },
    } = formData;

    if (state) mutateCityList(state);
  }, [formData?.captation?.state]);

  useEffect(() => {
    dispatch(handleLoading(isLoadingCityList));
  }, [isLoadingCityList]);

  return (
    <>
      <SimpleGrid columns={{ base: 0, md: 2 }} spacing={3} mb={4}>
        <FormControl id="social" isRequired>
          <FormLabel>Razão social</FormLabel>
          <Input
            id="social_reason"
            name="socialReaseon"
            group="captation"
            value={formData?.captation?.socialReaseon || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="fantasyName" isRequired>
          <FormLabel>Nome fantasia</FormLabel>
          <Input
            id="fantasy_name"
            name="fantasyName"
            group="captation"
            value={formData?.captation?.fantasyName || ""}
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 0, md: 3 }} spacing={3} mb={4}>
        <FormControl id="doc" isRequired>
          <FormLabel>CNPJ</FormLabel>
          <InputMask
            mask="99.999.999/9999-99"
            maskPlaceholder=""
            name="cnpj"
            group="captation"
            value={formData?.captation?.cnpj || ""}
            onChange={handleChange}
          >
            <Input type="text" placeholder="__.___.___/___-__" />
          </InputMask>
        </FormControl>
        <FormControl id="doc" isRequired>
          <FormLabel>Telefone</FormLabel>
          <InputMask
            mask="(99) 9 9999-9999"
            maskPlaceholder=""
            name="phone"
            group="captation"
            value={formData?.captation?.phone || ""}
            onChange={handleChange}
          >
            <Input type="text" placeholder="(__) _ ____-____" />
          </InputMask>
        </FormControl>
        <FormControl id="doc" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            id="email_company"
            name="email"
            group="captation"
            value={formData?.captation?.email || ""}
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
      <HStack spacing={3} mt={3}>
        <FormControl id="zipcode" isRequired>
          <FormLabel>CEP</FormLabel>
          <InputMask
            mask="99999-999"
            maskPlaceholder=""
            group="captation"
            name="cep"
            value={formData?.captation?.cep || ""}
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
            group="captation"
            value={formData?.captation?.state || ""}
            onChange={handleChange}
          >
            {!!stateList.length &&
              stateList.map(({ id, name }) => (
                <option value={id}>{name}</option>
              ))}
          </Select>
        </FormControl>
        <FormControl id="city" isRequired>
          <FormLabel>Cidade</FormLabel>
          <Select
            name="city"
            placeholder="Selecione uma cidade"
            group="captation"
            value={formData?.captation?.city || ""}
            onChange={handleChange}
          >
            {!!cityList.length &&
              cityList.map(({ id, name }) => (
                <option value={id}>{name}</option>
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
            group="captation"
            value={formData?.captation?.address || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="number" isRequired>
          <FormLabel>Número</FormLabel>
          <Input
            type="number"
            id="number"
            name="number"
            group="captation"
            value={formData?.captation?.number || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="district" isRequired>
          <FormLabel>Bairro</FormLabel>
          <Input
            id="district"
            name="district"
            group="captation"
            value={formData?.captation?.district || ""}
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
            group="captation"
            value={formData?.captation?.complement || ""}
            onChange={handleChange}
          />
        </FormControl>
      </HStack>
    </>
  );
}
