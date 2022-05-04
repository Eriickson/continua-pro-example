import React, { FC, useMemo } from "react";

import { Card, CardContainer, FormProvider, InputControl } from "@/components";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "@/store";
import { useDebouncedCallback } from "use-debounce";
import { OnChangeInput } from "@continuapro/events";

interface PaymentGatewaysFormProps {
  onChangeField(newValue: OnChangeInput): void;
}

export const PaymentGatewaysForm: FC<PaymentGatewaysFormProps> = ({ onChangeField }) => {
  const { paymentGateway } = useSelector(({ paymentGateways }) => paymentGateways);
  const { isLoading } = useSelector(({ paymentGateways }) => paymentGateways.updatePaymentGateway);

  const handleChange = useDebouncedCallback((newValue: OnChangeInput) => onChangeField(newValue), 1000);

  const paymentGatewayDefaultValues = useMemo(() => {
    return paymentGateway?.settings.reduce((a, v) => ({ ...a, [v.key]: v.value }), {});
  }, [paymentGateway]);

  return (
    <Card>
      <CardContainer>
        <Box maxW="5xl">
          <FormProvider id="payment-gateways-form" onSubmit={() => {}} defaultValues={paymentGatewayDefaultValues}>
            <SimpleGrid columns={12} gap={3}>
              {paymentGateway?.settings.map((setting) => (
                <GridItem key={setting.id} colSpan={6}>
                  <InputControl
                    name={setting.key}
                    formControl={{ label: setting.name }}
                    inputProps={{
                      onChange: (e) => handleChange({ id: setting.id, value: e.target.value, name: setting.key }),
                      isDisabled: isLoading,
                    }}
                  />
                </GridItem>
              ))}
            </SimpleGrid>
          </FormProvider>
        </Box>
      </CardContainer>
    </Card>
  );
};
