import React, { FC } from "react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import numeral from "numeral";
import { EntryPlan } from "@/contexts";

interface TableForPlansProps {
  title: string;
  entries: EntryPlan[];
}

export const TableForPlans: FC<TableForPlansProps> = ({ title, entries }) => {
  return (
    <Box flex="1" mb="1">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center" colSpan={2}>
              <Text
                textTransform="capitalize"
                fontSize="md"
                color="gray.700"
                fontWeight="black"
              >
                {title}
              </Text>
            </Th>
          </Tr>
          <Tr>
            <Th textAlign="center">Créditos</Th>
            <Th textAlign="center">Precio(MXN)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {entries.map((entry) => (
            <Tr key={entry.id}>
              <Td py="1.5" fontWeight="medium" textAlign="center">
                {numeral(entry.credit_amount).format("0,0")}
              </Td>
              <Td py="1.5" fontWeight="medium" textAlign="center">
                {numeral(entry.credit_amount).format("$0,0.00")}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
