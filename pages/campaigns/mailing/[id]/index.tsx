import React from "react";
import { MailingCampaingDetailTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const MailingCampaingDetail = () => {
  return (
    <div>
      <MailingCampaingDetailTemplate />
    </div>
  );
};

export default withAuth(MailingCampaingDetail);
