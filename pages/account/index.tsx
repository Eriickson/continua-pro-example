import React from "react";

import { MainContainer, SEO } from "@/components";
import { AccountTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const AccountPage = () => {
  return (
    <>
      <SEO title="Cuenta" />
      <MainContainer>
        <AccountTemplate />
      </MainContainer>
    </>
  );
};

export default withAuth(AccountPage);
