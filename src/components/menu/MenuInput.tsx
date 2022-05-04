import React from "react";

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useMenuItem,
} from "@chakra-ui/react";
import { Search } from "react-feather";

export const MenuInput = (props: any) => {
  const { role, ...rest } = useMenuItem(props);
  return (
    <Box px="3" role={role}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Box mb="2" ml="-5">
            <Search size="1rem" />
          </Box>
        </InputLeftElement>
        <Input
          pl="6"
          variant="flushed"
          color="black"
          placeholder="Buscar..."
          size="sm"
          {...rest}
        />
      </InputGroup>
    </Box>
  );
};
