import React from "react";
import { AdministrativeReportsTemplate } from "@/templates";
import { SEO, TemplateContainer } from "@/components";
import { withAuth } from "@/hocs";

const AdministrativeReportsPage = () => {
  return (
    <>
      <SEO title="Reportes Administrativos" />
      <TemplateContainer title="Reportes Administrativos">
        <AdministrativeReportsTemplate />
      </TemplateContainer>
    </>
  );
};

export default withAuth(AdministrativeReportsPage);
