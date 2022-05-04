import { useToast as _useToast } from "@chakra-ui/react";

interface UseToastArgs {}

interface ShowToastOptions {
  title: string;
  description?: string;
}

export const useToast = () => {
  const showToast = _useToast({ duration: 5000, isClosable: true, variant: "left-accent", position: "top-right" });

  return { showToast };
};
