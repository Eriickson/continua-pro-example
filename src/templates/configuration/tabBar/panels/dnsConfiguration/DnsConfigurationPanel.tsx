import { Card, CardContainer } from "@/components";
import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { WizardComponent } from "./wizard/WizardComponent";

export const DnsConfigurationPanel = () => {
  return (
    <Stack>
      <Card mb="5">
        <CardContainer>
          <Text mb="2" color="black" fontSize="xl" fontWeight="bold">
            Configurar DNS
          </Text>
          <Text fontWeight="medium" maxW="5xl">
            Para poder aplicar las personalizaciones a los enlaces y asegurar un correcto envío, tendrás que configurar
            tus DNS. Esto te permitirá realizar envíos de campañas desde tu dominio yu no el nuestro. Por favor,
            indícanos el dominio desde el cuál quieres enviar campañas y haz clic en el botón “Validar”.
          </Text>
        </CardContainer>
      </Card>
      <WizardComponent />
    </Stack>
  );
};
