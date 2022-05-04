import React from "react";

import { WhatsappCampaignsTemplate } from "@/templates";
import { SEO } from "@/components";
import { withAuth } from "@/hocs";

const WhatsappMessengerServies = () => {
  return (
    <>
      <SEO title="Servicio de Mensajería de Whatsapp" />
      <WhatsappCampaignsTemplate />
    </>
  );
};

export default withAuth(WhatsappMessengerServies);
