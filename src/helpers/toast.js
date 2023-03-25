import { useToast as useChakraToast } from "@chakra-ui/react";

export default function useToast() {
  const toast = useChakraToast();

  const handleToast = (
    title,
    description,
    status,
    duration,
    position = "bottom"
  ) => {
    toast({
      title,
      description,
      status,
      duration,
      position,
      variant: "left-accent",
    });
  };

  return { handleToast };
}
