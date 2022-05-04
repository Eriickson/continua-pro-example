import { Td } from "@chakra-ui/react";
import React, { FC } from "react";

interface TextColumnProps {
  value: any;
}

export const TextColumn: FC<TextColumnProps> = ({ value }) => {
  return <Td> {value === null || "" ? "-" : value}</Td>;
};
