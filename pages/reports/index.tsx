import React from "react";

import { ReportTemplate } from "@/templates";
import { MainContainer, SEO } from "@/components";
import { withAuth } from "@/hocs";

const ReportsPage = () => {
  return (
    <>
      <SEO title="Reportes" />
      <MainContainer>
        <ReportTemplate />
      </MainContainer>
    </>
  );
};

export default withAuth(ReportsPage);
