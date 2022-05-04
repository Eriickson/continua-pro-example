import { TabBarsEnclosed } from "@/components";
import React from "react";
import { AdditionalServicesPanel } from "./panels/additionalServices/AdditionalServicesPanel";
import { MyPlanPanel } from "./panels/myPlan/MyPlanPanel";

export const CreditPlansTabBar = () => {
  return (
    <div>
      <TabBarsEnclosed
        items={[
          { label: "Mi Plan", PanelComponent: MyPlanPanel },
          { label: "Servicios Adicionales", PanelComponent: AdditionalServicesPanel },
        ]}
      />
    </div>
  );
};
