import { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Select,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Pagination, usePagination } from "@ajna/pagination";

import PaginationT from "./components/Pagination";

const PaginationTable = ({ fetchPokemons }) => {
  const [total, setTotal] = useState();
  const [pokemons, setPokemons] = useState([]);

  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize,
  } = usePagination({
    total: total,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: 10,
      currentPage: 1,
    },
  });

  // effects
  useEffect(() => {
    fetchPokemons(pageSize, offset).then((pokemons) => {
      setTotal(pokemons.count);
      setPokemons(pokemons.results);
    });
  }, [currentPage, pageSize, offset]);

  // handlers
  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handlePageSizeChange = (event) => {
    const pageSize = Number(event.target.value);

    setPageSize(pageSize);
  };

  return (
    <>
      <Flex>
        <Select size="sm" onChange={() => {}} w={20} mb={3}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Select>
        <Text mt={0.5} ml={2}>
          resultados por página
        </Text>
      </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          {/* <TableCaption>Nenhum registro encontrado</TableCaption> */}

          <Thead>
            <Tr>
              <Th>Operação</Th>
              <Th>Modalidade</Th>
              <Th>Segmento</Th>
              <Th>Valor</Th>
              <Th>Status</Th>
              <Th>Últimas atualizações</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td textAlign="center"></Td>
              <Td textAlign="center"></Td>
              <Td textAlign="center"></Td>
              <Td textAlign="center">Nenhum registro encontrado</Td>
              <Td textAlign="center"></Td>
              <Td textAlign="center"></Td>
              <Td textAlign="center"></Td>
            </Tr>
          </Tbody>
          {/* <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody> */}
        </Table>
        <PaginationT
          pagesCount={pagesCount}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          pages={pages}
        />
      </TableContainer>
    </>
  );
};

export default PaginationTable;
