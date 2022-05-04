import React, { useEffect } from "react";

import { CampaignType } from "@continuapro/entity";

import { useRouter } from "next/router";

import { Stack } from "@chakra-ui/react";

import { MainContainer } from "@/components";
import { useAction } from "@/store";

import { CampaignsAvailable } from "./CampaignsAvailable";
import { MessegerServicesTabBar } from "./tabBar/MessegerServicesTabBar";

export const CampaignsTemplate = () => {
  const { getCampaigns, getCampaignTemplates } = useAction();

  const { pathname } = useRouter();

  useEffect(() => {
    const campaignType = pathname.split("/")[2] as CampaignType;
    getCampaigns({ campaignType: campaignType });
    getCampaignTemplates({ campaignType: campaignType });
  }, []);

  return (
    <div>
      <MainContainer>
        <Stack spacing={2}>
          <CampaignsAvailable />
          <MessegerServicesTabBar />
        </Stack>
      </MainContainer>
    </div>
  );
};
