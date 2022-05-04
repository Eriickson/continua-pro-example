import React, { FC } from "react";
import { Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { PricePlans } from "@/types";
import { PriceArrayEntriesTableRow } from "./PriceArrayEntriesTableRow";
import { NewPriceArrayEntriesRow } from "./NewPriceArrayEntriesRow";

interface PriceArrayEntriesTableProps {
  price: PricePlans;
}

export const PriceArrayEntriesTable: FC<PriceArrayEntriesTableProps> = ({
  price,
}) => {
  return (
    <div>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>
              <Text textAlign="center">CRÉDITOS</Text>{" "}
            </Th>
            <Th>
              <Text textAlign="center">PRECIO(MXN)</Text>{" "}
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {price.entries.map((entry) => (
            <PriceArrayEntriesTableRow
              priceId={price.id}
              row={entry}
              key={entry.id}
            />
          ))}
          <NewPriceArrayEntriesRow priceArrayId={price.id} />
        </Tbody>
      </Table>
    </div>
  );
};
