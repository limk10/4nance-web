import { Button as ButtonChakra } from "@chakra-ui/react";

function Button({
  onClick,
  text,
  scheme = "primary",
  variant,
  colorScheme,
  ...rest
}) {
  const color = {
    gray: {
      bg: "gray.700",
      color: "whiteAlpha.900",
      _hover: { bg: "gray.900", transition: "0.3s all" },
    },
    success: {
      bg: "green.600",
      color: "white",
      _hover: { bg: "green.700", transition: "0.3s all" },
    },
    primary: {
      bg: "primary.300",
      _hover: {
        bg: "primary.500",
      },
    },
  };

  return (
    <ButtonChakra
      onClick={onClick}
      fontWeight="500"
      borderRadius="md"
      boxShadow="md"
      {...(variant || colorScheme ? { variant, colorScheme } : color[scheme])}
      {...rest}
    >
      {text}
    </ButtonChakra>
  );
}

export default Button;
