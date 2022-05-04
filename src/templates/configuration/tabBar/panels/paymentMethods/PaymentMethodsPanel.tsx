import { Card, CardContainer } from "@/components";
import { useAction } from "@/store";
import { Box, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PaymentMethodsList } from "./PaymentMethodsList";

export const PaymentMethodsPanel = () => {
  const { getPaymentGateways } = useAction();

  useEffect(() => {
    getPaymentGateways();
  }, []);

  return (
    <Stack>
      <Card>
        <CardContainer>
          <Box textAlign="center">
            <Text mb="1" fontSize="3xl" color="secondary.500" fontWeight="medium">
              Configuración de Formas de Pago
            </Text>
            <Text lineHeight="6" mx="auto" fontSize="lg" color="gray.600" maxW="5xl" px="24">
              Seleccione del siguiente listado, el mecanismo de pago que desea configurar, dependiendo de la
              flexibilidad de las alternativas de integración de cada proveedor, la visualización de los formularios de
              configuración y el listado de elementos a configurar de cada una será diferente.
            </Text>
          </Box>
        </CardContainer>
      </Card>
      <PaymentMethodsList />
    </Stack>
  );
};
