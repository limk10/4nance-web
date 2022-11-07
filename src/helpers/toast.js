import { useToast as useChakraToast } from "@chakra-ui/react";

export default function useToast() {
  const toast = useChakraToast();

  const handleToast = (title, description, status, duration) => {
    toast({
      title,
      description,
      status,
      duration,
      variant: "left-accent",
    });
  };

  return { handleToast };
}
