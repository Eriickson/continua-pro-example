import React from "react";

import { MainContainer, SEO } from "@/components";
import { withAuth } from "@/hocs";
import { EmailMarketingTemplate } from "@/templates";

const EmailMarketingPage = () => {
  return (
    <MainContainer>
      <SEO title="Seleccione un punto de partida" />
      <EmailMarketingTemplate />
    </MainContainer>
  );
};

export default withAuth(EmailMarketingPage);
