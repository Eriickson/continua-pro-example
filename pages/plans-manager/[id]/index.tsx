import React, { useEffect } from "react";

import { useRouter } from "next/router";

import { PlanManagerIdTemplate } from "@/templates";
import { SEO, TemplateContainer } from "@/components";
import { useAction, useSelector } from "@/store";
import { withAuth } from "@/hocs";

const PlanManagerId = () => {
  const { getCreditPlan } = useAction();
  const { creditPlan } = useSelector(({ creditPlans }) => creditPlans);
  const { query } = useRouter();

  useEffect(() => {
    query.id && getCreditPlan({ id: Number(query.id) });
  }, [query]);

  return (
    <>
      <SEO title={creditPlan?.name ? `Plan ${creditPlan?.name}` : "Cargando Plan..."} />
      <TemplateContainer title="Administrar Planes">
        <PlanManagerIdTemplate />
      </TemplateContainer>
    </>
  );
};

export default withAuth(PlanManagerId);
