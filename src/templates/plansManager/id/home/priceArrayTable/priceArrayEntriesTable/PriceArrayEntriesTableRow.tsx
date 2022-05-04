import React, { FC, useState } from "react";

import { HStack, IconButton, Input, Td, Tr } from "@chakra-ui/react";
import { Edit, Save, Trash2, X } from "react-feather";

import { EntryPlan } from "@/contexts";
import { useAction } from "@/store";
import { useHandleResponse } from "@/hooks";

interface PriceArrayEntriesTableRowProps {
  priceId: number;
  row: EntryPlan;
}

export const PriceArrayEntriesTableRow: FC<PriceArrayEntriesTableRowProps> = ({ row, priceId }) => {
  const { deletePriceArrayEntry, updatePriceArrayEntry } = useAction();

  const handleResponse = useHandleResponse();

  const [creditAmout, setCreditAmout] = useState(row.credit_amount);
  const [price, setPrice] = useState(row.price);

  const [isEditing, setIsEditing] = useState(false);

  async function handleDelete() {
    const response = await deletePriceArrayEntry({ id: row.id, priceArrayId: priceId });

    handleResponse(response);
  }

  async function handleUpdate() {
    const response = await updatePriceArrayEntry({
      id: row.id,
      price_array_entry: { price_array_id: priceId, credit_amount: creditAmout, price: Number(price) },
    });

    handleResponse(response);
  }

  return (
    <Tr>
      <Td p="1" borderWidth="0">
        <Input
          textAlign="center"
          defaultValue={row.credit_amount}
          variant="flushed"
          isDisabled={!isEditing}
          fontWeight="semibold"
          color={isEditing ? "black" : "gray.500"}
          bgColor={isEditing ? "auto" : "gray.100"}
          cursor={isEditing ? "auto" : "not-allowed"}
          onChange={(e) => setCreditAmout(Number(e.target.value))}
        />
      </Td>
      <Td p="0" borderWidth="0">
        <Input
          textAlign="center"
          defaultValue={row.price}
          variant="flushed"
          isDisabled={!isEditing}
          fontWeight="semibold"
          color={isEditing ? "black" : "gray.500"}
          bgColor={isEditing ? "auto" : "gray.100"}
          cursor={isEditing ? "auto" : "not-allowed"}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </Td>
      <Td p="0" borderWidth="0">
        <HStack w="max-content">
          {isEditing ? (
            <>
              <IconButton
                _focus={{}}
                size="sm"
                variant="ghost"
                colorScheme="red"
                aria-label="Eliminar"
                icon={<X size="1.25rem" />}
                onClick={() => setIsEditing(!isEditing)}
              />
              <IconButton
                _focus={{}}
                size="sm"
                variant="ghost"
                colorScheme="green"
                aria-label="Guardar"
                icon={<Save size="1.25rem" />}
                onClick={handleUpdate}
              />
            </>
          ) : (
            <>
              <IconButton
                _focus={{}}
                size="sm"
                variant="ghost"
                colorScheme="blue"
                aria-label="editar"
                icon={<Edit size="1.25rem" />}
                onClick={() => setIsEditing(!isEditing)}
              />
              <IconButton
                _focus={{}}
                size="sm"
                variant="ghost"
                colorScheme="red"
                aria-label="Eliminar"
                icon={<Trash2 size="1.25rem" />}
                onClick={handleDelete}
              />
            </>
          )}
        </HStack>
      </Td>
    </Tr>
  );
};
