import { SettingsSolidIcon } from "@/assets";
import { TabBarsSimple } from "@/components";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ContactsPanel } from "./panels/contactPanel/ContactsPanel";
import { DashboardPanel } from "./panels/DashboardPanel";
import { SegmentPanel } from "./panels/SegmentPanel";

export const ContactsListTabBar = () => {
  const items = [
    { label: "Dashboard", PanelComponent: DashboardPanel },
    { label: "Contactos", PanelComponent: ContactsPanel },
    { label: "Segmentos", PanelComponent: SegmentPanel },
  ];

  return (
    <div>
      <TabBarsSimple
        tabsProps={{ defaultIndex: 1 }}
        items={items}
        rightComponent={
          <>
            <Link href="/contacts/settings">
              <a>
                <Button pl="3" leftIcon={<SettingsSolidIcon />} colorScheme="primary">
                  Configuración
                </Button>
              </a>
            </Link>
          </>
        }
      />
    </div>
  );
};
