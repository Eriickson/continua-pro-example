import React, { FC } from "react";

import { GridItem, HStack, IconButton, Text } from "@chakra-ui/react";

import { Trash2 } from "react-feather";

import { AlertDialog, Card, CardContainer } from "@/components";
import { PricePlans } from "@/types";

import { PriceArrayEntriesTable } from "./priceArrayEntriesTable/PriceArrayEntriesTable";
import { useAction } from "@/store";
import { useRouter } from "next/router";
import { useHandleResponse } from "@/hooks";

interface PriceArrayTableProps {
  price: PricePlans;
}

export const PriceArrayTable: FC<PriceArrayTableProps> = ({ price }) => {
  const { deletePriceArray, getCreditPlan } = useAction();
  const { query } = useRouter();

  const handleResponse = useHandleResponse();

  async function handleDelelete() {
    const response = await deletePriceArray({ id: price.id });

    handleResponse(response);
  }

  // useEffect(() => {
  //   if (["PRICE_ARRAY_ENTRY_DELETED", "PRICE_ARRAY_DELETED"].includes(state)) {
  //     getCreditPlan({ id: Number(query.id) });
  //     setCreditPlanState("ON_HOLD");
  //   }
  // }, [state]);

  return (
    <GridItem key={price.id} colSpan={3}>
      <Card>
        <CardContainer>
          <Text fontSize="lg" mb="2" fontWeight="semibold" textAlign="center">
            {price.name}
          </Text>
          <PriceArrayEntriesTable price={price} />
          <HStack mt="2" justifyContent="flex-end">
            <AlertDialog
              button={<IconButton size="sm" colorScheme="red" aria-label="Eliminar" icon={<Trash2 size="1.25rem" />} />}
              title={`Eliminar ${price.name}`}
              btnPri={{ label: "Confirmar", colorSchema: "red", onClick: handleDelelete }}
            />
          </HStack>
        </CardContainer>
      </Card>
    </GridItem>
  );
};
