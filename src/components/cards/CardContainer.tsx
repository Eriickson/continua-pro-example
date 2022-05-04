import { Box, BoxProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface CardContainerProps extends BoxProps {}

export const CardContainer: FC<CardContainerProps> = ({ children, ...props }) => {
  return (
    <Box p="3" {...props}>
      {children}
    </Box>
  );
};
