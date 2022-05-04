import { Card, CardContainer } from "@/components";
import { chakra, Box, Button, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const MyPlanPanel = () => {
  return (
    <Card>
      <CardContainer>
        <SimpleGrid columns={12}>
          <GridItem colSpan={4}>
            <Stack spacing="4">
              <Box>
                <Text lineHeight="none" fontWeight="semibold" fontSize="lg" color="secondary.500">
                  Créditos en plan mensual 5000
                </Text>
                <Text color="gray.700">
                  Fecha de vencimiento de tu plan actual:
                  <chakra.span color="black" ml="1" fontWeight="bold">
                    Sin vigencia definida
                  </chakra.span>
                </Text>
              </Box>
              <Box>
                <Text lineHeight="none" fontWeight="semibold" fontSize="lg" color="black">
                  Renovar mi Plan
                </Text>
                <Text color="gray.700" mr="1">
                  Si renuevas hoy, tu plan vencerá el 01 de Agosto del 2022
                </Text>
              </Box>
              <Button w="max-content" px="6" colorScheme="primary">
                Renovar
              </Button>
            </Stack>
          </GridItem>

          <GridItem colSpan={8}>
            <Stack spacing="4">
              <Text lineHeight="none" fontWeight="semibold" fontSize="lg" color="black">
                Cambiar mi plan
                <chakra.span color="secondary.500" ml="1" fontWeight="bold">
                  Email Marketing
                </chakra.span>
              </Text>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </CardContainer>
    </Card>
  );
};
