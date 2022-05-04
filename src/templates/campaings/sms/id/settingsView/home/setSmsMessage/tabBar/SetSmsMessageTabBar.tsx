import { TabBarsEnclosed } from "@/components";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { MessagePanel } from "./panels/MessagePanel";
import { TemplatePanel } from "./panels/TemplatePanel";

interface SetSmsMessageTabBarProps {
  onClickRow(row: any): void;
}

export const SetSmsMessageTabBar: FC<SetSmsMessageTabBarProps> = ({ onClickRow }) => {
  return (
    <Box>
      <TabBarsEnclosed
        items={[
          {
            label: "Mensaje",
            PanelComponent: MessagePanel,
          },
          {
            label: "Plantillas",
            PanelComponent: () => <TemplatePanel onClickRow={onClickRow} />,
          },
        ]}
      />
    </Box>
  );
};
