import React, { useEffect } from "react";

import { MainContainer } from "@/components";

import { MailingCampaingDetailTabBar } from "./tabBar/MailingCampaingDetailTabBar";
import { useAction } from "@/store";
import { useRouter } from "next/router";
import { Stack } from "@chakra-ui/react";
import { CardInformation } from "./CardInformation";

export const MailingCampaingDetailTemplate = () => {
  const { getCampaign, getCampaignStatsLog } = useAction();

  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getCampaign({ id: Number(query.id), campaignType: "mailing" });
      getCampaignStatsLog({ id: Number(query.id), campaignType: "mailing" });
    }
  }, [query]);

  return (
    <div>
      <MainContainer>
        <Stack>
          <CardInformation />
          <MailingCampaingDetailTabBar />
        </Stack>
      </MainContainer>
    </div>
  );
};
