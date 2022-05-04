import { Card, CardContainer } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { InformationForm } from "./InformationForm";

export const InformationPanel = () => {
  const { updateAccount } = useAction();
  const handleResponse = useHandleResponse();
  const { query } = useRouter();

  async function onSubmit(values: any, cb: () => void) {
    const response = await updateAccount({ account: values, id: Number(query.id) });

    handleResponse(response);
    cb();
  }

  return (
    <Card>
      <CardContainer>
        <Text mb="2" fontWeight="semibold" fontSize="lg">
          Información
        </Text>
        <InformationForm onSubmit={onSubmit} />
      </CardContainer>
    </Card>
  );
};
