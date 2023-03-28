import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
  RadioGroup,
  Radio,
  HStack,
  Link,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import CurrencyInput from "react-currency-input-field";

import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import useAxiosValidate from "../../../../../helpers/errors/axios";
import useFormHelper from "../../../../../helpers/form";
import { handleFormData } from "../../../../../redux/form/formSlice";
import {
  handleCategoryList,
  handleModalityList,
  useOperation,
} from "../../../../../redux/operation/operationSlice";
import {
  getCategories,
  getModalities,
} from "../../../../../services/api/operation";

export default function CaptureOperationForm() {
  const dispatch = useDispatch();
  const { handleChange, formData } = useFormHelper();
  const { axiosErrorValidate } = useAxiosValidate();

  const { modalityList, categoryList } = useSelector(useOperation);

  useQuery(["modalityList"], getModalities, {
    onSuccess(data) {
      dispatch(handleModalityList(data));
    },
    onError(error) {
      axiosErrorValidate(error);
    },
  });

  useQuery(["categoryList"], getCategories, {
    onSuccess(data) {
      dispatch(handleCategoryList(data));
    },
    onError(error) {
      axiosErrorValidate(error);
    },
  });

  const handleOnValueChange = (group, name, value) => {
    dispatch(
      handleFormData({
        group,
        name,
        value,
      })
    );
  };

  return (
    <form>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mb={4}>
        <FormControl id="operation" isRequired>
          <FormLabel>Dê um nome à operação</FormLabel>
          <Input
            type="text"
            name="investimentName"
            group="captation"
            value={formData?.captation?.investimentName || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="minimum_value" isRequired>
          <FormLabel>Qual o valor que deseja captar?</FormLabel>
          <CurrencyInput
            id="minimum_value"
            name="minimumValue"
            group="captation"
            className="chakra-input css-1c6j008"
            prefix="R$ "
            onValueChange={(value, _, values) =>
              handleOnValueChange("captation", "minimumValue", values.float)
            }
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 3, xl: 4 }} spacing={3} mb={4}>
        <FormControl id="profitability" isRequired>
          <FormLabel>
            Qual a rentabilidade? <small>(em %)</small>
          </FormLabel>
          <CurrencyInput
            id="profitability"
            name="profitability"
            group="captation"
            className="chakra-input css-1c6j008"
            onValueChange={(value, _, values) =>
              handleOnValueChange("captation", "profitability", values.float)
            }
          />
        </FormControl>
        <FormControl id="min-capture" isRequired>
          <FormLabel>Captura mínima?</FormLabel>
          <CurrencyInput
            id="min-capture"
            name="minCapture"
            group="captation"
            className="chakra-input css-1c6j008"
            decimalsLimit={2}
            // decimalSeparator=","
            prefix="R$ "
            onValueChange={(value, _, values) =>
              handleOnValueChange("captation", "minCapture", values.float)
            }
          />
        </FormControl>
        <FormControl id="max-capture" isRequired>
          <FormLabel>Captura máxima?</FormLabel>
          <CurrencyInput
            id="max-capture"
            name="maxCapture"
            group="captation"
            className="chakra-input css-1c6j008"
            decimalsLimit={2}
            // decimalSeparator=","
            prefix="R$ "
            onValueChange={(value, _, values) =>
              handleOnValueChange("captation", "maxCapture", values.float)
            }
          />
        </FormControl>
        <FormControl id="time-investiment" isRequired>
          <FormLabel>
            Tempo de investimento? <small>(Meses)</small>
          </FormLabel>
          <CurrencyInput
            id="time-investiment"
            name="timeInvestment"
            group="captation"
            className="chakra-input css-1c6j008"
            onValueChange={(value, _, values) =>
              handleOnValueChange("captation", "timeInvestment", values.float)
            }
            maxLength={2}
          />
        </FormControl>
      </SimpleGrid>
      <FormControl id="description" mb={4} isRequired>
        <FormLabel>
          Conte-nos um pouco sobre a operação e o destino do recurso captado
          <small>(Mínimo 200 caracteres)</small>
        </FormLabel>
        <Textarea
          type="text"
          rows={6}
          id="description"
          name="description"
          group="captation"
          value={formData?.captation?.description || ""}
          onChange={handleChange}
        />
      </FormControl>
      <SimpleGrid columns={1} spacing={3} mb={4}>
        <FormControl isRequired>
          <FormLabel>Qual a categoria do seu projeto ?</FormLabel>
          <RadioGroup>
            <HStack spacing="25px">
              {!!modalityList.length &&
                modalityList.map((modality) => (
                  <Radio
                    key={modality.id}
                    value={modality.id}
                    name="modality"
                    group="captation"
                    onChange={handleChange}
                    isChecked={formData?.operation?.modality === modality.id}
                  >
                    {modality.name}
                  </Radio>
                ))}
            </HStack>
          </RadioGroup>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={1} spacing={3} mb={4} mt={5}>
        <FormControl isRequired>
          <FormLabel>Selecione o melhor formato para a operação</FormLabel>
          <RadioGroup group="captation">
            <HStack spacing="25px">
              {!!categoryList.length &&
                categoryList.map((category) => (
                  <Radio
                    key={category.id}
                    value={category.id}
                    name="category"
                    group="captation"
                    onChange={handleChange}
                    isChecked={formData?.operation?.category === category.id}
                  >
                    {category.name}
                  </Radio>
                ))}
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
