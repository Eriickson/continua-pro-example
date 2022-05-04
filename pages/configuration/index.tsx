import { NextPage } from "next";
import React from "react";
import { SEO, TemplateContainer } from "../../src/components";
import { ConfigurationTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const ConfigurationPage: NextPage = () => {
  return (
    <TemplateContainer title="Configuración General">
      <SEO title="Configuración" />
      <ConfigurationTemplate />
    </TemplateContainer>
  );
};

export default withAuth(ConfigurationPage);
