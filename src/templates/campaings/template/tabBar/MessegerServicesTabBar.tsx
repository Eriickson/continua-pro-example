import { TabBarsSimple } from "@/components";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CreateOrUpdateTemplate } from "./createOrUpdateTemplate/CreateOrUpdateTemplate";
import { NewCampaign } from "./newCampaign";
import { NewCampaignTemplate } from "./newCampaignTemplate";
import { CampaingsPanel } from "./panels/campaings/CampaingsPanel";
import { DashboardPanel } from "./panels/dashboard/DashboardPanel";
import { TemplatePanel } from "./panels/templates/TemplatePanel";

export const MessegerServicesTabBar = () => {
  const { query, replace, pathname } = useRouter();
  const [indexTabBar, setIndexTabBar] = useState(0);

  useEffect(() => {
    if (query.defaultIndexTabBar && typeof Number(query.defaultIndexTabBar) === "number") {
      setIndexTabBar(Number(query.defaultIndexTabBar));
      replace({ pathname }, undefined, { shallow: true });
    }
  }, [query]);

  return (
    <TabBarsSimple
      tabsProps={{ defaultIndex: 1, index: indexTabBar, onChange: setIndexTabBar }}
      items={[
        { label: "Dashboard", PanelComponent: DashboardPanel },
        { label: "Campañas", PanelComponent: CampaingsPanel },
        { label: "Plantillas", PanelComponent: TemplatePanel },
      ]}
      rightComponent={
        <HStack>
          <NewCampaignTemplate />
          <NewCampaign />
        </HStack>
      }
    />
  );
};
