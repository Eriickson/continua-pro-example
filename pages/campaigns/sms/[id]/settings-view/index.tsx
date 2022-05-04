import React from "react";

import { SmsCampaignsSettingsViewTemplate } from "@/templates";
import { withAuth } from "@/hocs";

import { MainContainer } from "@/components";

const SmsCampaignsSettingsViewPage = () => {
  return (
    <MainContainer>
      <SmsCampaignsSettingsViewTemplate />
    </MainContainer>
  );
};

export default withAuth(SmsCampaignsSettingsViewPage);
