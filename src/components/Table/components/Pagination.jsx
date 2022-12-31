import { Center, Flex, Text } from "@chakra-ui/react";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
  PaginationContainer,
} from "@ajna/pagination";

const PaginationT = ({ pagesCount, currentPage, handlePageChange }) => {
  return (
    <Center>
      <Flex
        align="center"
        textAlign="center"
        flexDirection="column"
        w={{ base: "100%", md: "80%", xl: "60%" }}
      >
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        >
          <PaginationContainer
            align="center"
            justify="space-between"
            pt={4}
            px={1}
            w="full"
          >
            <PaginationPrevious
              size="sm"
              onClick={() =>
                console.log(
                  "Im executing my own function along with Previous component functionality"
                )
              }
            >
              <Text>Voltar</Text>
            </PaginationPrevious>
            {/* <PaginationPageGroup align="center">
              {pages.map((page) => (
                <PaginationPage
                  size="sm"
                  w={8}
                  background="transparent"
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                  key={`pagination_page_${page}`}
                  page={page}
                  onClick={() =>
                    console.log(
                      "Im executing my own function along with Page component functionality"
                    )
                  }
                />
              ))}
            </PaginationPageGroup> */}
            <PaginationNext
              isDisabled
              size="sm"
              onClick={() =>
                console.log(
                  "Im executing my own function along with Next component functionality"
                )
              }
            >
              <Text>Próximo</Text>
            </PaginationNext>
          </PaginationContainer>

          <Text mt={3}>Mostrando 0 até 0 de 0 registros</Text>
        </Pagination>
      </Flex>
    </Center>
  );
};

export default PaginationT;
