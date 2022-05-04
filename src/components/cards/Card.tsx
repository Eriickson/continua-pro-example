import { Box, BoxProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface CardProps extends BoxProps {}

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return (
    <Box rounded="base" shadow="sm" bgColor="white" border="1px" borderColor="gray.200" {...props}>
      {children}
    </Box>
  );
};
