import { Card, CardContainer } from "@/components";
import { useSelector } from "@/store";
import { chakra, Button, HStack, Img, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

export const PaymentMethodsList: FC = () => {
  const { paymentGateways } = useSelector(({ paymentGateways }) => paymentGateways);

  return (
    <Card>
      <CardContainer>
        <HStack alignItems="stretch" mb="5" spacing="6" justifyContent="center">
          {paymentGateways.map((paymentGateway) => (
            <Stack key={paymentGateway.id} justifyContent="flex-end" w="3xs">
              <Img
                src={paymentGateway.logo_url || "https://www.inlinefs.com/wp-content/uploads/2020/04/placeholder.png"}
              />
              <Text textAlign="center" fontSize="2xl" fontWeight="medium">
                {paymentGateway.name}
              </Text>
              <Link passHref href={`/payment-gateways/${paymentGateway.id}`}>
                <chakra.a>
                  <Button w="full" colorScheme="primary">
                    Configurar
                  </Button>
                </chakra.a>
              </Link>
            </Stack>
          ))}
        </HStack>
      </CardContainer>
    </Card>
  );
};
