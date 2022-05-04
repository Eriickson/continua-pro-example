import React, { FC } from "react";

import { ActivePanel } from "./panels/active/ActivePanel";
import { SuspendedPanel } from "./panels/suspended/SuspendedPanel";
import { TabBarsEnclosed } from "@/components";
import { CreateOrUpdateUser } from "../createOrUpdateUser";
import { Button } from "@chakra-ui/react";

type TabBarItemsType = {
  label: string;
  PanelComponent?: FC;
};

export const TabBarUsers = () => {
  const tabBarItems: TabBarItemsType[] = [
    {
      label: "Activos",
      PanelComponent: ActivePanel,
    },
    {
      label: "Suspended",
      PanelComponent: SuspendedPanel,
    },
  ];

  return (
    <TabBarsEnclosed
      items={tabBarItems}
      rightComponent={
        <>
          <CreateOrUpdateUser type="CREATE" button={<Button colorScheme="primary">Nuevo Usuario</Button>} />
        </>
      }
    />
  );
};
