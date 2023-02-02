/* eslint-disable react/no-children-prop */
import React, { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import useAxiosValidate from "../../../../helpers/errors/axios";
import { getPerson } from "../../../../services/api/person";
import { useMutation, useQuery } from "react-query";
import { setFormData } from "../../../../redux/form/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleLoading } from "../../../../redux/general/generalSlice";
import useFormHelper from "../../../../helpers/form";
import InputMask from "react-input-mask";
import {
  handleCityList,
  handleStateList,
  useAddress,
} from "../../../../redux/address/addressSlice";
import { getCityList, getStateList } from "../../../../services/api/address";

function PersonalInformation() {
  const dispatch = useDispatch();
  const { axiosErrorValidate } = useAxiosValidate();
  const { formData, handleChange } = useFormHelper();

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

  const { isLoading: isLoadingPerson } = useQuery(["queryPerson"], getPerson, {
    onSuccess(data) {
      const {
        person: { id, name, document, email, phone_1 },
        address: {
          cep,
          address,
          number,
          district,
          complement,
          city: { state_id },
          city_id,
        },
        infBanks,
      } = data;

      const dataPerson = {
        id,
        name,
        document,
        email,
        phone_1,
        cep,
        address,
        number,
        district,
        complement,
        state_id,
        city_id,
        pix_key: infBanks?.pix_key,
        pix_type: infBanks?.pix_type,
      };

      dispatch(
        setFormData({
          group: "personData",
          values: dataPerson,
        })
      );
    },
    onError(error) {
      axiosErrorValidate(error);
    },
  });

  useEffect(() => {
    if (!formData?.personData?.state_id) return;
    const {
      personData: { state_id },
    } = formData;

    if (state_id) mutateCityList(state_id);
  }, [formData?.personData?.state_id]);

  useEffect(() => {
    if (isLoadingCityList) return;
    dispatch(handleLoading(isLoadingPerson));
  }, [isLoadingPerson]);

  useEffect(() => {
    if (isLoadingPerson) return;
    dispatch(handleLoading(isLoadingCityList));
  }, [isLoadingCityList]);

  return (
    <>
      <Box my={5}>
        <Text fontSize="xl" fontWeight="900" color="blackAlpha.800">
          Dados cadastrais
        </Text>
      </Box>
      <Alert
        borderRadius="md"
        fontSize="sm"
        color="blackAlpha.700"
        status="warning"
        mb={6}
      >
        <AlertIcon />
        <Text>
          Verifique se todos os seus dados estão preenchidos de forma correta.
          Caso não estejam, preencha corretamente antes de continuar. Esses
          dados serão utilizados para confeccionar o{" "}
          <b>contrato de investimento</b>
        </Text>
      </Alert>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={5}>
        <Box>
          <Box>
            <Text fontSize="lg" fontWeight="600" mb={3}>
              • Dados Pessoais
            </Text>
            <VStack spacing={3}>
              <FormControl id="name" isRequired>
                <FormLabel>Nome</FormLabel>
                <Input
                  id="name"
                  group="personData"
                  name="name"
                  value={formData?.personData?.name || ""}
                  onChange={handleChange}
                />
              </FormControl>
              {/* <FormControl id="last_name" isRequired>
                <FormLabel>Sobrenome</FormLabel>
                <Input
                  id="last_name"
                  name="last_name"
                  value=""
                  onChange={() => {}}
                />
              </FormControl>
              <FormControl id="dob" isRequired>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value=""
                  onChange={() => {}}
                />
              </FormControl>
              <FormControl id="nascionality" isRequired>
                <FormLabel>Nascionalidade</FormLabel>
                <Select
                  name="nascionality"
                  onChange={() => {}}
                  value=""
                  placeholder="Selecione sua nascionalidade"
                >
                  <option value={0}>Brasileiro Nato</option>
                  <option value={1}>Nascionalizado</option>
                </Select>
              </FormControl>
              <FormControl id="genre" isRequired>
                <FormLabel>Genero</FormLabel>
                <Select
                  name="genre"
                  onChange={() => {}}
                  value=""
                  placeholder="Selecione seu genero"
                >
                  <option value={0}>Masculino</option>
                  <option value={1}>Feminio</option>
                </Select>
              </FormControl> */}
              <FormControl id="cpf" isRequired>
                <FormLabel>CPF</FormLabel>
                <InputMask
                  mask="999.999.999-99"
                  maskPlaceholder=""
                  group="personData"
                  name="document"
                  value={formData?.personData?.document || ""}
                  disabled
                >
                  <Input type="text" placeholder="___.___.___-__" />
                </InputMask>
              </FormControl>
              {/* <SimpleGrid columns={2} spacingX={3} w="100%">
                <FormControl id="rg" isRequired>
                  <FormLabel>RG</FormLabel>
                  <Input id="rg" name="rg" value="" onChange={() => {}} />
                </FormControl>
                <FormControl id="rg_emissor" isRequired>
                  <FormLabel>Orgão emissor</FormLabel>
                  <Input
                    id="rg_emissor"
                    name="rg_emissor"
                    value=""
                    onChange={() => {}}
                  />
                </FormControl>
              </SimpleGrid> */}
              {/* <FormControl id="civil_state" isRequired>
                <FormLabel>Estado cívil</FormLabel>
                <Select
                  name="civil_state"
                  onChange={() => {}}
                  value=""
                  placeholder="Selecione seu genero"
                >
                  <option value={0}>Solteiro(a)</option>
                  <option value={1}>Casado(a)</option>
                  <option value={2}>Viúvo(a)</option>
                </Select>
              </FormControl>
              <FormControl id="cargo" isRequired>
                <FormLabel>Cargo</FormLabel>
                <Input id="cargo" name="cargo" value="" onChange={() => {}} />
              </FormControl> */}
            </VStack>
          </Box>
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="600" mb={3}>
              • Contato
            </Text>
            <VStack spacing={3}>
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.personData?.email || ""}
                  disabled
                />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Telefone</FormLabel>
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
            </VStack>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text fontSize="lg" fontWeight="600" mb={3}>
              • Endereço
            </Text>
            <VStack spacing={3}>
              <FormControl id="cep" isRequired>
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
              <SimpleGrid columns={2} spacingX={3} w="100%">
                <FormControl id="state" isRequired>
                  <FormLabel>Estado/Provincia</FormLabel>
                  <Select
                    name="state_id"
                    placeholder="Selecione um estado"
                    group="personData"
                    value={formData?.personData?.state_id || ""}
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
                    name="city_id"
                    placeholder="Selecione uma cidade"
                    group="personData"
                    value={formData?.personData?.city_id || ""}
                    onChange={handleChange}
                  >
                    {cityList.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </SimpleGrid>
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
              <SimpleGrid columns={2} spacingX={3} w="100%">
                <FormControl id="number" isRequired>
                  <FormLabel>Número</FormLabel>
                  <Input
                    type="number"
                    id="number"
                    name="number"
                    group="personData"
                    value={formData?.personData?.number || ""}
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
              </SimpleGrid>
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
            </VStack>
          </Box>
          <Box mt={4}>
            {/* <Text fontSize="lg" fontWeight="600" mb={3}>
              • Dados Bancarios
            </Text>
            <VStack spacing={3}>
              <FormControl id="bank" isRequired>
                <FormLabel>Banco</FormLabel>
                <Select
                  name="bank"
                  onChange={() => {}}
                  value=""
                  placeholder="Selecione seu banco"
                >
                  <option value={0}>Bradesco</option>
                  <option value={1}>Itaú</option>
                  <option value={2}>Nubank</option>
                </Select>
              </FormControl>
              <SimpleGrid columns={3} spacingX={3} w="100%">
                <FormControl id="agency" isRequired>
                  <FormLabel>Agencia</FormLabel>
                  <Input
                    id="agency"
                    name="agency"
                    value=""
                    onChange={() => {}}
                  />
                </FormControl>
                <FormControl id="account" isRequired>
                  <FormLabel>Conta (Sem dígito)</FormLabel>
                  <Input
                    id="account"
                    name="account"
                    value=""
                    onChange={() => {}}
                  />
                </FormControl>
                <FormControl id="account_digit" isRequired>
                  <FormLabel>Dígito conta</FormLabel>
                  <Input
                    id="account_digit"
                    name="account_digit"
                    value=""
                    onChange={() => {}}
                  />
                </FormControl>
              </SimpleGrid>
            </VStack> */}
          </Box>
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="600" mb={3}>
              • Pix
            </Text>
            <VStack spacing={3}>
              <SimpleGrid columns={2} spacingX={3} w="100%">
                <FormControl id="pix_type" isRequired>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    id="pix_type"
                    name="pix_type"
                    group="personData"
                    value={formData?.personData?.pix_type || ""}
                    onChange={handleChange}
                    placeholder="Selecione o tipo"
                  >
                    <option value="cpf_cnpj">CPF/CNPJ</option>
                    <option value="phone">Telefone</option>
                    <option value="email">E-mail</option>
                    <option value="random_key">Chave Aleatória</option>
                  </Select>
                </FormControl>
                <FormControl id="pix_key" isRequired>
                  <FormLabel>Chave</FormLabel>
                  <Input
                    id="pix_key"
                    name="pix_key"
                    group="personData"
                    value={formData?.personData?.pix_key || ""}
                    onChange={handleChange}
                  />
                </FormControl>
              </SimpleGrid>
            </VStack>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default PersonalInformation;
