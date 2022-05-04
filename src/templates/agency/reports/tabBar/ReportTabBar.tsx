import { TabBarsSimple } from "@/components";
import React from "react";
import { CampaignsPanel } from "./panels/campaigns/CampaignsPanel";
import { CreateReport } from "./panels/campaigns/CreateReport/CreateReport";

export const ReportTabBar = () => {
  return (
    <div>
      <TabBarsSimple
        items={[
          {
            label: "Campañas",
            PanelComponent: CampaignsPanel,
          },
        ]}
        rightComponent={
          <>
            <CreateReport />
          </>
        }
      />
    </div>
  );
};
