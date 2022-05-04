import React from "react";
import { SEO } from "@/components";
import { SmsCampaignTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const SmsCampaingDetailsPage = () => {
  return (
    <>
      <SEO title="Detalles de la campaña" />
      <SmsCampaignTemplate />
    </>
  );
};

export default withAuth(SmsCampaingDetailsPage);
