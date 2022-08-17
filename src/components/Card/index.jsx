import { Container } from "@chakra-ui/react";

function Card({ children, ...rest }) {
  return (
    <Container minW="100%" bg="white" borderRadius="md" {...rest}>
      {children}
    </Container>
  );
}

export default Card;
