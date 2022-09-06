import { Container } from "@chakra-ui/react";

function Card({ children, ...rest }) {
  return (
    <Container
      minW="100%"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      {...rest}
    >
      {children}
    </Container>
  );
}

export default Card;
