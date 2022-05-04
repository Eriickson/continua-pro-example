import { TabBarsSimple } from "@/components";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { CreditPlans } from "./panels/creditPlans/CreditPlans";
import { NotificationsPanel } from "./panels/notifications/NotificationsPanel";
import { PersonalizationPanel } from "./panels/personalization/PersonalizationPanel";
import { SendersPanel } from "./panels/senders/SendersPanel";
import { SuppressionListPanel } from "./panels/suppressionList/SuppressionListPanel";
import { UsersPanel } from "./panels/users/UsersPanel";

export const AccountContactsTabBar = () => {
  const { query } = useRouter();
  const [tabIndex, setTabIndex] = React.useState(3);

  useEffect(() => {
    query.accountContactTabBarItem && setTabIndex(Number(query.accountContactTabBarItem));
  }, [query]);

  return (
    <div>
      <TabBarsSimple
        tabsProps={{ index: tabIndex, onChange: (i) => setTabIndex(i) }}
        items={[
          { label: "Usuarios", PanelComponent: UsersPanel },
          { label: "Senders", PanelComponent: SendersPanel },
          {
            label: "Lista de suprención",
            PanelComponent: SuppressionListPanel,
          },
          {
            label: "Personalización",
            PanelComponent: PersonalizationPanel,
          },
          { label: "Notificaciones", PanelComponent: NotificationsPanel },
          { label: "Planes de Crédito", PanelComponent: CreditPlans },
        ]}
      />
    </div>
  );
};
