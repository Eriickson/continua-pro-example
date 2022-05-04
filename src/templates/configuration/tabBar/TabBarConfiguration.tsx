import React, { FC, useMemo } from "react";

import {
  DnsConfigurationPanel,
  NotificationsPanel,
  RolesAndPermissionsPanel,
  UsersPanel,
  PaymentMethodsPanel,
  ChannelsPanel,
} from "./panels";
import { GeneralPanel } from "./panels/general/GeneralPanel";
import { TabBarsSimple } from "@/components";
import { useRouter } from "next/router";

type TabBarItemsType = {
  label: string;
  PanelComponent?: FC;
};

export const TabBarConfiguration = () => {
  const tabBarItems: TabBarItemsType[] = [
    { label: "General", PanelComponent: GeneralPanel },
    { label: "Usuarios", PanelComponent: UsersPanel },
    { label: "Roles y Permisos", PanelComponent: RolesAndPermissionsPanel },
    { label: "Canales", PanelComponent: ChannelsPanel },
    { label: "Notificationes", PanelComponent: NotificationsPanel },
    { label: "Formas de Pago", PanelComponent: PaymentMethodsPanel },
    { label: "Acceso Transaccional" },
    { label: "Configuración DNS", PanelComponent: DnsConfigurationPanel },
  ];

  const { query, replace, pathname } = useRouter();

  const defaultIndex = useMemo(() => {
    if (query.main_tabbar) {
      replace({ pathname }, undefined, { shallow: true });

      return Number(query.main_tabbar);
    }
    return 0;
  }, [query]);

  return <TabBarsSimple tabsProps={{ defaultIndex }} items={tabBarItems} />;
};
