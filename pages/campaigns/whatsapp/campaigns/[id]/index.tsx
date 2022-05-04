import React from "react";

import { WhatsappCampaingDetailsTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const WhatsappCampaingDetailsPage = () => {
  return <WhatsappCampaingDetailsTemplate />;
};

export default withAuth(WhatsappCampaingDetailsPage);
