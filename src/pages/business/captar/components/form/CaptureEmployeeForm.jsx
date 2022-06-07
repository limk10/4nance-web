import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Select,
  InputGroup,
  InputLeftAddon,
  GridItem,
} from "@chakra-ui/react";

export default function CaptureEmployeeForm({ form, handleChange }) {
  return (
    <form>
      <SimpleGrid columns={{ base: 0, md: 2 }} spacing={3} mb={4}>
        <FormControl id="social" isRequired>
          <FormLabel>Razão social</FormLabel>
          <Input
            type="text"
            name="social"
            value={form?.social || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="fantasyName" isRequired>
          <FormLabel>Nome fantasia</FormLabel>
          <Input
            type="text"
            name="fantasyName"
            value={form?.fantasyName || ""}
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 0, md: 3 }} spacing={3} mb={4}>
        <FormControl id="doc" isRequired>
          <FormLabel>CNPJ</FormLabel>
          <Input
            disabled={form?.select}
            type="text"
            name="doc"
            value={form?.doc || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="zipCode" isRequired>
          <FormLabel>CEP</FormLabel>
          <Input
            type="text"
            name="zipCode"
            value={form?.zipCode || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="state" isRequired>
          <FormLabel>Estado</FormLabel>
          <Select
            disabled={true}
            name="state"
            onChange={handleChange}
            value={form?.state || ""}
            placeholder="Selecione um estado"
          >
            <option value="option1">MT</option>
            <option value="option2">MS</option>
            <option value="option3">SP</option>
          </Select>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 0, md: 2 }} spacing={3} mb={4}>
        <FormControl id="fundationDate" isRequired>
          <FormLabel>Data de fundação</FormLabel>
          <Input
            type="date"
            name="fundationDate"
            value={form?.fundationDate || ""}
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
              value={form?.site || ""}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 0, md: 2 }} spacing={3} mb={4} isRequired>
        <FormControl id="invoicing">
          <FormLabel>Faturamento no último exercício</FormLabel>
          <Select
            name="invoicing"
            onChange={handleChange}
            value={form?.invoicing || ""}
            placeholder="Selecione um faturamento"
          >
            <option value="Nunca faturei">Nunca faturei</option>
            <option value="1 a 10 Milhões">1 a 10 Milhões</option>
            <option value="10 a 50 Milhões">10 a 50 Milhões</option>
            <option value="50 a 100 Milhões">50 a 100 Milhões</option>
            <option value="100 a 200 Milhões">100 a 200 Milhões</option>
          </Select>
        </FormControl>
        <FormControl id="net-worth" isRequired>
          <FormLabel>Patrimônio Líquido</FormLabel>
          <Select
            name="patrimony"
            onChange={handleChange}
            value={form?.patrimony || ""}
            placeholder="Selecione o patrimônio"
          >
            <option value="Nunca faturei">Nunca faturei</option>
            <option value="1 a 10 Milhões">1 a 10 Milhões</option>
            <option value="10 a 50 Milhões">10 a 50 Milhões</option>
            <option value="50 a 100 Milhões">50 a 100 Milhões</option>
            <option value="100 a 200 Milhões">100 a 200 Milhões</option>
          </Select>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 0, md: 2 }} spacing={3}>
        <FormControl id="invoicing">
          <FormLabel>LinkedIn do representante</FormLabel>
          <Input
            type="text"
            name="linkedin"
            value={form?.linkedin || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="net-worth">
          <FormLabel>Tempo de carreira do representante</FormLabel>
          <Select
            name="careerTime"
            onChange={handleChange}
            value={form?.careerTime || ""}
            placeholder="Selecione o tempo de carreira"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </SimpleGrid>
    </form>
  );
}
