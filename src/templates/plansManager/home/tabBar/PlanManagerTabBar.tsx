import React from "react";

import { HStack } from "@chakra-ui/react";

import { TabBarsSimple } from "@/components";

import { PlansForAgenciesPanel } from "./panels/plansForAgencies/PlansForAgenciesPanel";
import { RegulatePlans } from "./panels/regulatePlans/RegulatePlansPanel";
import { NewPlan } from "../newPlan";

export const PlanManagerTabBar = () => {
  const items = [
    {
      label: "Planes para agencias",
      PanelComponent: PlansForAgenciesPanel,
    },
    {
      label: "Planes regulares",
      PanelComponent: RegulatePlans,
    },
  ];

  return (
    <>
      <TabBarsSimple
        items={items}
        rightComponent={
          <HStack>
            <NewPlan />
          </HStack>
        }
      />
    </>
  );
};
