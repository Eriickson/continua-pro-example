import React from "react";

import { LiveChatCampaingDetailsTemplate } from "@/templates";
import { SEO } from "@/components";
import { withAuth } from "@/hocs";

const LiveChatMessengerServies = () => {
  return (
    <>
      <SEO title="Servicio de Mensajería de Live Chat" />
      <LiveChatCampaingDetailsTemplate />
    </>
  );
};

export default withAuth(LiveChatMessengerServies);
