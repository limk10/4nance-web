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
  Flex,
  Box,
  Tooltip,
} from "@chakra-ui/react";

import { useMutation } from "react-query";
import useAxiosValidate from "../../helpers/errors/axios";
import { useDispatch } from "react-redux";
import { handleLoading } from "../../redux/general/generalSlice";
import { formatCurrency } from "../../helpers/format";

import { FiEdit, FiEye } from "react-icons/fi";

export default function PaginationTable({ fetchData, rows }) {
  const dispatch = useDispatch();
  // const [total, setTotal] = useState();
  const [data, setData] = useState([]);
  const { axiosErrorValidate } = useAxiosValidate();

  // const outerLimit = 2;
  // const innerLimit = 2;

  // const {
  //   pages,
  //   pagesCount,
  //   offset,
  //   currentPage,
  //   setCurrentPage,
  //   setIsDisabled,
  //   isDisabled,
  //   pageSize,
  //   setPageSize,
  // } = usePagination({
  //   total: total,
  //   limits: {
  //     outer: outerLimit,
  //     inner: innerLimit,
  //   },
  //   initialState: {
  //     pageSize: 10,
  //     currentPage: 1,
  //   },
  // });

  const { mutate: getData, isLoading: isLoadingGetData } = useMutation(
    async (data) => fetchData(data),
    {
      onSuccess: (data) => {
        console.log("data", data);
        setData(data);
      },
      onError(error) {
        axiosErrorValidate(error);
      },
    }
  );

  // const handlePageChange = (nextPage) => {
  //   setCurrentPage(nextPage);
  //   console.log("request new data with ->", nextPage);
  // };

  // const handlePageSizeChange = (event) => {
  //   const pageSize = Number(event.target.value);

  //   setPageSize(pageSize);
  // };

  const renderValue = (d, r) => {
    const value = d[r.key];
    if (r.brlCurrency) {
      const floatValue = parseFloat(value);
      return formatCurrency(floatValue);
    }
    return value;
  };

  useEffect(() => {
    if (fetchData) getData();
  }, [fetchData]);

  useEffect(() => {
    dispatch(handleLoading(isLoadingGetData));
  }, [isLoadingGetData]);

  return (
    <>
      {/* <Flex>
        <Select size="sm" onChange={() => {}} w={20} mb={3}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Select>
        <Text mt={0.5} ml={2}>
          resultados por página
        </Text>
      </Flex> */}
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          {!data.length && (
            <TableCaption>Nenhum registro encontrado</TableCaption>
          )}

          <Thead>
            <Tr>
              {rows.map(({ key, label }) => (
                <Th key={key}>{label}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody></Tbody>
          <Tbody>
            {!!data.length &&
              data.map((d, key) => (
                <Tr key={key}>
                  <>
                    {rows.map((r) => (
                      <>
                        {r.key !== "actions" ? (
                          <Td>{renderValue(d, r)}</Td>
                        ) : (
                          <Td>
                            <Flex>
                              {r.edit && (
                                <Tooltip label="Editar">
                                  <Box
                                    px={2}
                                    cursor="pointer"
                                    onClick={() => {}}
                                  >
                                    <FiEdit fontSize={20} />
                                  </Box>
                                </Tooltip>
                              )}
                              {r.details && (
                                <Tooltip label="Detalhes">
                                  <Box
                                    px={2}
                                    cursor="pointer"
                                    onClick={() => {}}
                                  >
                                    <FiEye fontSize={20} />
                                  </Box>
                                </Tooltip>
                              )}
                            </Flex>
                          </Td>
                        )}
                      </>
                    ))}
                  </>
                </Tr>
              ))}
          </Tbody>
        </Table>
        {/* <PaginationT
          pagesCount={pagesCount}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          pages={pages}
        /> */}
      </TableContainer>
    </>
  );
}
