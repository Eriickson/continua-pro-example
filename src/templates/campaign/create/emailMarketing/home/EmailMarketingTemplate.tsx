import React, { useEffect } from "react";

import { Flex, Heading, VStack } from "@chakra-ui/react";

import { ButtonBack, Card, CardContainer } from "@/components";
import { useAction } from "@/store";

import { EmailMarketingTabBar } from "./tabBar/EmailMarketingTabBar";

export const EmailMarketingTemplate = () => {
  const { getCampaignTemplates } = useAction();

  useEffect(() => {
    getCampaignTemplates({ campaignType: "mailing" });
  }, []);

  return (
    <div>
      <VStack alignItems="stretch">
        <Card>
          <CardContainer>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading size="md">Seleccione un punto de partida</Heading>
              <ButtonBack pathname="/campaigns/mailing" />
            </Flex>
          </CardContainer>
        </Card>
        <EmailMarketingTabBar />
      </VStack>
    </div>
  );
};
