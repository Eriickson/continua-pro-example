import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { useAction, useSelector } from "@/store";
import { CreditPlanItem } from "./CreditPlanItem";

export const AdditionalServicesPanel = () => {
  const { getCreditPlans } = useAction();
  const { creditPlans } = useSelector(({ creditPlans }) => creditPlans);

  useEffect(() => {
    getCreditPlans();
  }, []);

  return (
    <SimpleGrid gap={2} columns={12}>
      {creditPlans.map((creditPlan) => (
        <CreditPlanItem key={creditPlan.id} creditPlan={creditPlan} />
      ))}
    </SimpleGrid>
  );
};
