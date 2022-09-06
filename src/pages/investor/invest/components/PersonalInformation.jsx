import React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

function PersonalInformatio() {
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
                <Input id="name" name="name" value="" onChange={() => {}} />
              </FormControl>
              <FormControl id="last_name" isRequired>
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
              </FormControl>
              <FormControl id="cpf" isRequired>
                <FormLabel>CPF</FormLabel>
                <Input id="cpf" name="cpf" value="" onChange={() => {}} />
              </FormControl>
              <SimpleGrid columns={2} spacingX={3} w="100%">
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
              </SimpleGrid>
              <FormControl id="civil_state" isRequired>
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
              </FormControl>
            </VStack>
          </Box>
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="600" mb={3}>
              • Contrato
            </Text>
            <VStack spacing={3}>
              <FormControl id="e-mail" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input id="e-mail" name="e-mail" value="" onChange={() => {}} />
              </FormControl>
              <FormControl id="e-mail" isRequired>
                <FormLabel>Telefone</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+55" />
                  <Input
                    type="tel"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                  />
                </InputGroup>
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
                <Input id="cep" name="cep" value="" onChange={() => {}} />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Endereço</FormLabel>
                <Input
                  id="address"
                  name="address"
                  value=""
                  onChange={() => {}}
                />
              </FormControl>
              <SimpleGrid columns={2} spacingX={3} w="100%">
                <FormControl id="number" isRequired>
                  <FormLabel>Número</FormLabel>
                  <Input
                    id="number"
                    name="number"
                    value=""
                    onChange={() => {}}
                  />
                </FormControl>
                <FormControl id="complement" isRequired>
                  <FormLabel>Complemento</FormLabel>
                  <Input
                    id="complement"
                    name="complement"
                    value=""
                    onChange={() => {}}
                  />
                </FormControl>
              </SimpleGrid>
              <FormControl id="district" isRequired>
                <FormLabel>Bairro</FormLabel>
                <Input
                  id="district"
                  name="addrdistrictss"
                  value=""
                  onChange={() => {}}
                />
              </FormControl>
              <SimpleGrid columns={2} spacingX={3} w="100%">
                <FormControl id="city" isRequired>
                  <FormLabel>Cidade</FormLabel>
                  <Input id="city" name="city" value="" onChange={() => {}} />
                </FormControl>
                <FormControl id="state" isRequired>
                  <FormLabel>Estado</FormLabel>
                  <Input id="state" name="state" value="" onChange={() => {}} />
                </FormControl>
              </SimpleGrid>
            </VStack>
          </Box>
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="600" mb={3}>
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
            </VStack>
          </Box>
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="600" mb={3}>
              • Pix (Opcional)
            </Text>
            <VStack spacing={3}>
              <SimpleGrid columns={2} spacingX={3} w="100%">
                <FormControl id="pix_type" isRequired>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    name="pix_type"
                    onChange={() => {}}
                    value=""
                    placeholder="Selecione o tipo"
                  >
                    <option value={1}>Conta corrente</option>
                    <option value={2}>Conta poupança</option>
                  </Select>
                </FormControl>
                <FormControl id="key_pix" isRequired>
                  <FormLabel>Chave</FormLabel>
                  <Input
                    id="key_pix"
                    name="key_pix"
                    value=""
                    onChange={() => {}}
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

export default PersonalInformatio;
