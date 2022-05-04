import React, { useEffect } from "react";

import { useRouter } from "next/router";

import { Flex, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";

import { Card, CardContainer } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction, useSelector } from "@/store";

import { SettingsViewForm } from "./settingsViewForm/SettingsViewForm";
import { SettingsViewHeader } from "./SettingsViewHeader";
import { TemplateViewer } from "./settingsViewForm/TemplateViewer";

export const SettingsViewTemplate = () => {
  const { getContactSegments, getCampaignTemplate, getCampaign, updateCampaign } = useAction();
  const { campaign } = useSelector(({ campaigns }) => campaigns.mailing);
  const { query } = useRouter();
  const handleResponse = useHandleResponse();

  async function handleChange(newValue: any) {
    const response = await updateCampaign({ id: Number(query.id), campaign: newValue, campaignType: "mailing" });

    handleResponse(response);
  }

  useEffect(() => {
    if (query.id) {
      getContactSegments();
      getCampaign({ id: Number(query.id), campaignType: "mailing" });
    }
  }, [query]);

  useEffect(() => {
    if (campaign && campaign.sumary.campaign_template) {
      getCampaignTemplate({ id: campaign.sumary.campaign_template.id, campaignType: "mailing" });
    }
  }, [campaign]);

  return (
    <VStack alignItems="stretch">
      <SettingsViewHeader />
      <SimpleGrid gap={2} columns={12}>
        <GridItem colSpan={4}>
          <Card>
            <CardContainer>
              <SettingsViewForm onChange={handleChange} />
            </CardContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={8}>
          <Card>
            <CardContainer>
              <Flex justifyContent="center">
                <TemplateViewer />
              </Flex>
            </CardContainer>
          </Card>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
