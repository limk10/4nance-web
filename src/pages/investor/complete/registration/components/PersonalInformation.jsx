/* eslint-disable react/no-children-prop */
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";

function PersonalInformation() {
  return (
    <>
      <Box mt={5}>
        <HStack spacing={3}>
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
          <FormControl id="last_name" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value=""
              onChange={() => {}}
            />
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="cpf" isRequired>
            <FormLabel>CPF</FormLabel>
            <Input id="cpf" name="cpf" value="" onChange={() => {}} />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Telefone</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+65" />
              <Input id="phone" name="phone" value="" onChange={() => {}} />
            </InputGroup>
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="dob" isRequired>
            <FormLabel>Data de nascimento</FormLabel>
            <Input
              type="date"
              id="dob"
              name="dob"
              value=""
              onChange={() => {}}
            />
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
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="zipcode" isRequired>
            <FormLabel>CEP</FormLabel>
            <Input id="zipcode" name="zipcode" value="" onChange={() => {}} />
          </FormControl>
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
              value=""
              onChange={() => {}}
            />
          </FormControl>
        </HStack>
        <HStack spacing={3} mt={3}>
          <FormControl id="complement">
            <FormLabel>Complemento</FormLabel>
            <Input
              id="complement"
              name="complement"
              value=""
              onChange={() => {}}
            />
          </FormControl>
          <FormControl id="district" isRequired>
            <FormLabel>Bairro</FormLabel>
            <Input id="district" name="district" value="" onChange={() => {}} />
          </FormControl>
          <FormControl id="city" isRequired>
            <FormLabel>Cidade</FormLabel>
            <Input
              id="complement"
              name="complement"
              value=""
              onChange={() => {}}
            />
          </FormControl>
          <FormControl id="state" isRequired>
            <FormLabel>Estado/Provincia</FormLabel>
            <Select
              name="state"
              onChange={() => {}}
              value=""
              placeholder="Selecione um estado"
            >
              <option value={0}>Mato Grosso</option>
              <option value={1}>Mato Grosso do Sul</option>
              <option value={2}>Minas Gerais</option>
              <option value={3}>São Paulo</option>
              <option value={4}>Rio de Janeiro</option>
            </Select>
          </FormControl>
        </HStack>
      </Box>
    </>
  );
}

export default PersonalInformation;
