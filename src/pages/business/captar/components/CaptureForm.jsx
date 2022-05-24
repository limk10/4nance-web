import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Select,
  InputGroup,
  InputLeftAddon,
  Textarea,
  RadioGroup,
  Radio,
  HStack,
  FormHelperText,
  Text,
  Link,
  Checkbox,
  CheckboxGroup,
  Flex,
} from "@chakra-ui/react";
export function CaptureEmployeeForm({ form, handleChange }) {
  return (
    <form>
      <SimpleGrid columns={2} spacing={3} mb={4}>
        <FormControl id="social">
          <FormLabel>Razão social *</FormLabel>
          <Input
            type="text"
            name="social"
            value={form?.social}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="fantasy-name">
          <FormLabel>Nome fantasia *</FormLabel>
          <Input
            type="text"
            name="fantasy-name"
            value={form?.fantasyName}
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={3} spacing={3} mb={4}>
        <FormControl id="doc">
          <FormLabel>CNPJ *</FormLabel>
          <Input
            disabled={form?.doc}
            type="text"
            name="doc"
            value={form?.doc}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="cep">
          <FormLabel>CEP *</FormLabel>
          <Input
            type="text"
            name="cep"
            value={form?.zipCode}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="state">
          <FormLabel>Estado *</FormLabel>
          <Select placeholder="Selecione..." disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          {/* <Input
            type="text"
            name="state"
            value={form?.state}
            onChange={handleChange}
          /> */}
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={3} mb={4}>
        <FormControl id="fundation-date">
          <FormLabel>Data de fundação *</FormLabel>
          <Input
            type="date"
            name="fundation-date"
            value={form?.fundationDate}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="site">
          <FormLabel>Site</FormLabel>
          <InputGroup>
            <InputLeftAddon children="https://" />
            <Input
              type="text"
              name="site"
              value={form?.site}
              onChange={handleChange}
            />
          </InputGroup>
          {/* <Input
            type="text"
            name="site"
            value={form?.site}
            onChange={handleChange}
          /> */}
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={3} mb={4}>
        <FormControl id="invoicing">
          <FormLabel>Faturamento no último exercício *</FormLabel>
          <Input
            type="text"
            name="invoicing"
            value={form?.invoicing}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="net-worth">
          <FormLabel>Patrimônio Líquido *</FormLabel>
          <Select placeholder="Selecione...">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={3}>
        <FormControl id="invoicing">
          <FormLabel>LinkedIn do representante</FormLabel>
          <Input
            type="text"
            name="invoicing"
            value={form?.invoicing}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="net-worth">
          <FormLabel>Tempo de carreira do representante</FormLabel>
          <Select placeholder="Selecione...">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </SimpleGrid>
    </form>
  );
}
export function CaptureOperationForm({ form, handleChange }) {
  return (
    <form>
      <SimpleGrid columns={2} spacing={3} mb={4}>
        <FormControl id="operation">
          <FormLabel>Dê um nome à operação *</FormLabel>
          <Input
            type="text"
            name="operation"
            value={form?.operation}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="value">
          <FormLabel>Qual o valor que deseja captar? *</FormLabel>
          <InputGroup>
            <InputLeftAddon children="R$" />
            <Input
              type="text"
              name="value"
              value={form?.value}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
      </SimpleGrid>
      <FormControl id="description" mb={4}>
        <FormLabel>
          Conte-nos um pouco sobre a operação e o destino do recurso captado
          (Mínimo 200 caracteres) *
        </FormLabel>
        <Textarea
          type="text"
          name="description"
          rows={6}
          value={form?.description}
          onChange={handleChange}
        />
      </FormControl>
      <SimpleGrid columns={1} spacing={3} mb={4}>
        <FormControl>
          <FormLabel>Selecione o melhor formato para a operação *</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack spacing="25px">
              <Radio value="Sasuke">Equity</Radio>
              <Radio value="Nagato">Dívida</Radio>
              <Radio value="Itachi">Ativo Real</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </SimpleGrid>
      <Flex>
        <Checkbox mt={5}>
          Aceito o{" "}
          <Link color="primary.500" href="#!" onClick={() => {}}>
            Termo de Confidencialidade
          </Link>{" "}
          da 4Nance for Business
        </Checkbox>
      </Flex>
    </form>
  );
}
