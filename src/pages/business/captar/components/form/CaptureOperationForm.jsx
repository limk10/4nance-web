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

export default function CaptureOperationForm({ form, handleChange }) {
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
