import React, { FC } from "react";

import { Tr } from "@chakra-ui/react";

import { useAction } from "@/store";
import { useHandleResponse } from "@/hooks";

import { NewPriceArrayEntriesRowForm } from "./newPriceArrayEntriesRow/NewPriceArrayEntriesRowForm";
interface NewPriceArrayEntriesRowProps {
  priceArrayId: number;
}

export const NewPriceArrayEntriesRow: FC<NewPriceArrayEntriesRowProps> = ({ priceArrayId }) => {
  const { createPriceArrayEntry } = useAction();
  const handleResponse = useHandleResponse();

  async function onSubmit(values: NewPriceArrayEntriesRowFormType) {
    const { creditAmount, price } = values;
    const response = await createPriceArrayEntry({
      price_array_entry: { credit_amount: creditAmount, price, price_array_id: priceArrayId },
    });

    handleResponse(response);
  }

  return (
    <Tr>
      <NewPriceArrayEntriesRowForm priceArrayId={priceArrayId} onSubmit={onSubmit} />
    </Tr>
  );
};
