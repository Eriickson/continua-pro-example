import { useAction } from "@/store";
import React, { useEffect } from "react";
import { EmailTabBar } from "./tabBar/EmailTabBar";

export const MailingCampaignsTemplate = () => {
  const { getCampaignTemplates } = useAction();
  useEffect(() => {
    getCampaignTemplates({ campaignType: "mailing" });
  }, []);

  return <EmailTabBar />;
};
