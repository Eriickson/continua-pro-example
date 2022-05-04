import React from "react";
import { DashboardTemplate } from "@/templates";
import { SEO, TemplateContainer } from "@/components";
import { withAuth } from "@/hocs";
import { useSelector } from "@/store";

const DashboardPage = () => {
  const { profile } = useSelector(({ profile }) => profile);

  return (
    <>
      <SEO title="Dashboard" />
      <TemplateContainer title="Dashboard" subtitle={`Bienvenido de nuevo ${profile.name?.split(" ")[0]}!`}>
        <DashboardTemplate />
      </TemplateContainer>
    </>
  );
};

export default withAuth(DashboardPage);
