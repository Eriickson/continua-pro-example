import React, { useEffect } from "react";

import { useRouter } from "next/router";

import { Stack } from "@chakra-ui/react";

import { OnChangeInput } from "@continuapro/events";

import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";

import { PaymentGatewaysForm } from "./paymentGatewaysForm/PaymentGatewaysForm";
import { PaymentGatewayInformation } from "./paymentGatewayInformation/PaymentGatewayInformation";

export const PaymentGatewaysTemplate = () => {
  const { getPaymentGateway, updatePaymentGateway } = useAction();
  const { query } = useRouter();
  const handleResponse = useHandleResponse();

  async function handleChangeField(values: OnChangeInput) {
    const response = await updatePaymentGateway({ id: values.id, payment_gateway_setting: { value: values.value } });
    handleResponse(response);
  }

  useEffect(() => {
    if (query.id) {
      getPaymentGateway({ id: Number(query.id) });
    }
  }, [query]);
  return (
    <Stack>
      <PaymentGatewayInformation />
      <PaymentGatewaysForm onChangeField={handleChangeField} />
    </Stack>
  );
};
