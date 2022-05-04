import { TabBarsSimple } from "@/components";
import React from "react";
import { ContactActiviy } from "./panels/contactActiviy/ContactActiviy";
import { PerformancePanel } from "./panels/performance/PerformancePanel";

export const MailingCampaingDetailTabBar = () => {
  return (
    <div>
      <TabBarsSimple
        items={[
          { label: "Performance", PanelComponent: PerformancePanel },
          { label: "Actividad de Contacto", PanelComponent: ContactActiviy },
        ]}
      />
    </div>
  );
};
