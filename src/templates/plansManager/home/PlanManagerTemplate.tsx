import React, { useEffect } from "react";

import { PlanManagerTabBar } from "./tabBar/PlanManagerTabBar";
import { useAction } from "@/store";

export const PlanManagerTemplate = () => {
  const { getCreditPlans } = useAction();

  useEffect(() => {
    getCreditPlans();
  }, []);

  return (
    <div>
      <PlanManagerTabBar />
    </div>
  );
};
