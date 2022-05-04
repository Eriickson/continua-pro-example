import { Card, CardContainer, Table } from "@/components";
import {
  Box,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Search } from "react-feather";
import { ReportGenerationModal } from "./reportGeneration/ReportGenerationModal";
import { ReportStatusModal } from "./reportStatusModal/ReportStatusModal";

export const CampaignsPanel = () => {
  return (
    <VStack alignItems="stretch">
      <Card>
        <CardContainer>
          <SimpleGrid placeItems="baseline" columns={12}>
            <GridItem colSpan={6}>
              <Heading size="md">Reportes</Heading>
            </GridItem>
            <GridItem colSpan={6}>
              <Box minW="25rem">
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Box ml="-2" color="gray.500">
                      <Search size="1.25rem" />
                    </Box>
                  </InputLeftElement>
                  <Input
                    placeholder="Buscar..."
                    fontWeight="medium"
                    variant="flushed"
                  />
                </InputGroup>
              </Box>
            </GridItem>
          </SimpleGrid>
        </CardContainer>
      </Card>
      <Card>
        <ReportStatusModal />
        <ReportGenerationModal />
        <Table
          layout={{
            columns: [
              { label: "Fecha y hora de Generación", path: "/" },
              { label: "Campaña", path: "" },
              { label: "Estatus de mensajes", path: "" },
              { label: "Fecha y hora de Inicio", path: "" },
              { label: "Fecha y hora de fin", path: "" },
              { label: "Estatus", path: "" },
            ],
          }}
          data={[]}
        />
      </Card>
    </VStack>
  );
};
