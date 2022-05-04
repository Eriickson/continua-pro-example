import React from "react";

import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "@/store";
import { CardForPlans } from "./CardForPlans";
import { TableForPlans } from "./TableForPlans";

export const PlansForAgenciesPanel = () => {
  const { creditPlans } = useSelector(({ creditPlans }) => creditPlans);

  return (
    <SimpleGrid gap="2" columns={12}>
      {creditPlans.map((creditPlan) => (
        <GridItem key={creditPlan.id} colSpan={[12, null, 6, null, 4, 3]}>
          <CardForPlans creditPlan={creditPlan}>
            {creditPlan.price_arrays.map((price) => (
              <TableForPlans key={price.id} title={price.name} entries={price.entries} />
            ))}
          </CardForPlans>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
