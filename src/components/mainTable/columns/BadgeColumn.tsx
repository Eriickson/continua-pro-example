import { Td, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface BadgeColumnProps {
  value: any;
}

export const BadgeColumn: FC<BadgeColumnProps> = ({ value }) => {
  return (
    <Td>
      <Text w="max-content">{value}</Text>
    </Td>
  );
};
