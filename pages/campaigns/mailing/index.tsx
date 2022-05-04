import React from "react";
import { MainContainer, SEO } from "@/components";
import { MailingCampaignsTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const EmailPage = () => {
  return (
    <div>
      <SEO title="Email" />
      <MainContainer>
        <MailingCampaignsTemplate />
      </MainContainer>
    </div>
  );
};

export default withAuth(EmailPage);
