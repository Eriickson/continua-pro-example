import { Card, CardContainer } from "@/components";
import { useAction } from "@/store";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AddressForm } from "./AddressForm";

export const AddressPanel = () => {
  const { updateAccountAddress } = useAction();
  const { query } = useRouter();

  async function onSubmit(values: any) {
    const response = await updateAccountAddress({ address: values, id: Number(query.id) });
    console.log(values, response);
  }

  return (
    <div>
      <Card>
        <CardContainer>
          <Text mb="2" fontWeight="semibold" fontSize="lg">
            Dirección
          </Text>
          <AddressForm onSubmit={onSubmit} />
        </CardContainer>
      </Card>
    </div>
  );
};
