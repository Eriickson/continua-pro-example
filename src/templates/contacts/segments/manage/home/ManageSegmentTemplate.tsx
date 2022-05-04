import React, { useEffect } from "react";

import { GridItem, SimpleGrid, Text, Divider, Button, VStack, Box } from "@chakra-ui/react";
import { Card, CardContainer, SectionTopTitle } from "@/components";
import { SelectSegment } from "./SelectSegment";
import { CreateOrUpdateSegment } from "./createOrUpdateSegment";
import { useAction, useSelector } from "@/store";
import { TableContactSegment } from "./tableContactSegment/TableContactSegment";

export const ManageSegmentTemplate = () => {
  const { getContactSegments, getFilters } = useAction();
  const { contactSegment } = useSelector(({ contactSegments }) => contactSegments);

  useEffect(() => {
    getContactSegments();
    getFilters();
  }, []);

  return (
    <>
      <Box mb="2">
        <SectionTopTitle
          title="Administrar Segmentos"
          urlBack="/contacts"
          rightButtons={
            <CreateOrUpdateSegment type="CREATE" button={<Button colorScheme="primary">Nuevo Segmento</Button>} />
          }
        />
      </Box>
      <SimpleGrid gap={2} columns={12}>
        <GridItem colSpan={3}>
          <SelectSegment />
          <Divider />
        </GridItem>
        <GridItem colSpan={9}>
          <VStack alignItems="stretch">
            <Card>
              <CardContainer>
                <Text fontWeight="medium" color="gray.700">
                  {Number(contactSegment?.contacts?.length || 0)} Contactos encontrados
                </Text>
              </CardContainer>
            </Card>
            <TableContactSegment />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
