import React from "react";
import { SEO, TemplateContainer } from "@/components";
import { PlanManagerTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const PlanManager = () => {
  return (
    <>
      <SEO title="Administrar Planes" />
      <TemplateContainer title="Administrar Planes">
        <PlanManagerTemplate />
      </TemplateContainer>
    </>
  );
};

export default withAuth(PlanManager);
