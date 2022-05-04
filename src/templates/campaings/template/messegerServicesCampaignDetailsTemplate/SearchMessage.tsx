import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { Search } from "react-feather";
import { useDebouncedCallback } from "use-debounce";

export const SearchMessage = () => {
  const debounce = useDebouncedCallback((value: string) => {
    if (!value) return;
    console.log(value);
  }, 500);

  return (
    <InputGroup>
      <InputLeftElement color="gray.600" pointerEvents="none">
        <Search size="1.25rem" />
      </InputLeftElement>
      <Input
        colorScheme="primary"
        w="96"
        variant="flushed"
        placeholder="Buscar..."
        onChange={(e) => debounce(e.target.value)}
      />
    </InputGroup>
  );
};
