import React from "react";
import { Badge, Box, Button, Divider, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { ButtonBack, Card, CardContainer, MainContainer, MainTable } from "@/components";
import { HeroPresentation } from "./HeroPresentation";
import { useRouter } from "next/router";
import { CampaignsAvailable } from "../CampaignsAvailable";
import { useSelector } from "@/store";
import numeral from "numeral";

export const MessegerServicesCampaignDetailsTemplate = () => {
  const { pathname } = useRouter();

  const { campaign } = useSelector(({ campaigns }) => campaigns.sms);

  return (
    <MainContainer>
      <Stack spacing={2}>
        <CampaignsAvailable />
        <Card>
          <CardContainer>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium" fontSize="xl">
                Mensajes
              </Text>
              <HStack spacing={2}>
                <ButtonBack pathname={`/campaigns/${pathname.split(/\//g)[2]}`} />
                {/* ?defaultIndexTabBar=1 */}
                <Box>
                  <Button colorScheme="primary">Exportar Mensajes</Button>
                </Box>
              </HStack>
            </HStack>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            <Text fontWeight="medium" fontSize="lg">
              Detalles de la campaña
            </Text>
          </CardContainer>
          <Divider />
          <CardContainer>
            <SimpleGrid gap={2} columns={12}>
              <HeroPresentation title="Campaña" value={campaign?.name} />
              <HeroPresentation title="Mensaje" value={campaign?.content} />
              <HeroPresentation
                title="Etiquetas"
                value={
                  <>
                    {campaign?.tags.split(",").map((tag) => (
                      <Badge variant="solid" colorScheme="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </>
                }
              />
              <HeroPresentation title="Fecha" value={campaign?.schedule_date || "Sin fecha"} />
              <HeroPresentation title="Mensajes" value={numeral(campaign?.messages.length).format("0,0")} />
              <HeroPresentation title="Tasa de Entrega" value={campaign?.delivery_rate || "Sin fecha"} />
              <HeroPresentation title="Costo" value={String(campaign?.cost || 0)} />
            </SimpleGrid>
          </CardContainer>
        </Card>

        <MainTable
          data={campaign?.messages}
          layout={{
            columns: [
              { label: "Estatus", path: "status" },
              { label: "Carrier", path: "carrier" },
              { label: "Fecha y hora de entrada", path: "delivered_at" },
              { label: "Destinatario", path: "recipient" },
              { label: "ID del mensaje", path: "uuid" },
            ],
          }}
        />
      </Stack>
    </MainContainer>
  );
};
