import React from "react";

import { Card, CardContainer } from "@/components";
import { Button, Flex, GridItem, HStack, List, ListItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const AutomatizationTemplate = () => {
  return (
    <div>
      <Stack>
        <Card>
          <CardContainer>
            <Flex justifyContent="space-between">
              <Text color="secondary.500" fontSize="2xl" fontWeight="semibold">
                Automatizaciones
              </Text>
              <HStack>
                <Link href="/agency/automatization/create">
                  <a>
                    <Button colorScheme="primary">Crear Automatización</Button>
                  </a>
                </Link>
              </HStack>
            </Flex>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            <List>
              <ListItem>
                <SimpleGrid columns={12}>
                  <GridItem colSpan={4}>
                    <Text lineHeight="none" color="secondary.500" fontSize="lg" fontWeight="medium">
                      Prueba
                    </Text>
                    <Text>June 9, 2021 at 2:15 PM(Something else)</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text lineHeight="none">
                      <strong>12</strong> Veces Ejecutada
                    </Text>
                    <Text>Activa desde el 12 de Febrero del 2021</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <HStack justifyContent="flex-end">
                      <Button colorScheme="red">Apagar</Button>
                      <Button variant="outline" colorScheme="primary">
                        Editar espacio de trabajo
                      </Button>
                    </HStack>
                  </GridItem>
                </SimpleGrid>
              </ListItem>
            </List>
          </CardContainer>
        </Card>
      </Stack>
    </div>
  );
};
