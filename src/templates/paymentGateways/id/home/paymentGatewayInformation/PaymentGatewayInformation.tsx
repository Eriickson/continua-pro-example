import { Card, CardContainer } from "@/components";
import { useSelector } from "@/store";
import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export const PaymentGatewayInformation = () => {
  const { paymentGateway } = useSelector(({ paymentGateways }) => paymentGateways);

  return (
    <Card>
      <CardContainer>
        <HStack>
          <Image w="24" src="https://www.inlinefs.com/wp-content/uploads/2020/04/placeholder.png" alt="" />
          <Text lineHeight="none" fontSize="xl" fontWeight="medium" color="gray.600">
            {paymentGateway?.name}
          </Text>
        </HStack>
      </CardContainer>
    </Card>
  );
};
