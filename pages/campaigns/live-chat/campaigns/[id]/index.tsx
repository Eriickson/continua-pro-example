import React from "react";

import { LiveChatCampaingDetailsTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const LiveChatCampaingDetailsPage = () => {
  return <LiveChatCampaingDetailsTemplate />;
};

export default withAuth(LiveChatCampaingDetailsPage);
