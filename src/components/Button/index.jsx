import { Button as ButtonChakra } from "@chakra-ui/react";

function Button({ action, text, scheme = "primary", ...rest }) {
  const color = {
    gray: {
      bg: "gray.700",
      color: "whiteAlpha.900",
      _hover: { bg: "gray.900", transition: "0.3s all" },
    },
    primary: {},
  };

  return (
    <ButtonChakra
      onClick={action}
      fontWeight="500"
      borderRadius="md"
      {...color[scheme]}
      {...rest}
    >
      {text}
    </ButtonChakra>
  );
}

export default Button;
