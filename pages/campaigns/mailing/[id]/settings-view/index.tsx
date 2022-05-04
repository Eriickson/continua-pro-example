import { MainContainer } from "@/components";
import { withAuth } from "@/hocs";
import { SettingsViewTemplate } from "@/templates";
import React from "react";

const SettingsViewPage = () => {
  return (
    <MainContainer>
      <SettingsViewTemplate />
    </MainContainer>
  );
};

export default withAuth(SettingsViewPage);
