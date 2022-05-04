import React from "react";

import { SmsCampaignsTemplate } from "@/templates";
import { SEO } from "@/components";
import { withAuth } from "@/hocs";

const SmsMessengerServies = () => {
  return (
    <>
      <SEO title="Servicio de Mensajería de SMS" />
      <SmsCampaignsTemplate />
    </>
  );
};

export default withAuth(SmsMessengerServies);
