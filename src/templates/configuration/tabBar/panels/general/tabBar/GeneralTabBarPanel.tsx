import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowLeft } from "react-feather";
import { TabBarsEnclosed } from "../../../../../../components";
import { AccountDetailPanel } from "./panels/accountDetails/AccountDetailPanel";
import { CustomizationPanel } from "./panels/customization/CustomizationPanel";

export const GeneralTabBarPanel = () => {
  return (
    <TabBarsEnclosed
      items={[
        {
          label: "Configuración del Sistema",
          PanelComponent: AccountDetailPanel,
        },
        {
          label: "Detalles de Cuenta",
          PanelComponent: CustomizationPanel,
        },
      ]}
    />
  );
};
