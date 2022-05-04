import { Card, CardContainer } from "@/components";
import React from "react";

import parse from "html-react-parser";
import { useSelector } from "@/store";
import { Box, Divider, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

export const TemplatesPanel = () => {
  const { campaignTemplates } = useSelector(({ campaignTemplates }) => campaignTemplates.mailing);

  return (
    <SimpleGrid gap={2} columns={12}>
      {campaignTemplates.map((campaignTemplate) => (
        <GridItem key={campaignTemplate.id} colSpan={4}>
          <Card h="full">
            <CardContainer>
              <Box w="full">
                <Text fontWeight="medium">{campaignTemplate.name}</Text>
                <Divider mt="1" mb="3" />
                <Box w="full" overflow="hidden" display="flex">
                  {campaignTemplate.content ? parse(campaignTemplate.content) : null}
                </Box>
              </Box>
            </CardContainer>
          </Card>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
