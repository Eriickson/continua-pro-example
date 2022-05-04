import { MainTable } from "@/components";
import { useSelector } from "@/store";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

interface TemplatePanelProps {
  onClickRow(row: any): void;
}

export const TemplatePanel: FC<TemplatePanelProps> = ({ onClickRow }) => {
  const { campaignTemplates } = useSelector(({ campaignTemplates }) => campaignTemplates.sms);

  return (
    <Box bgColor="white" paddingX="3" paddingTop="3" overflow="auto">
      <Box w="max-content">
        <MainTable
          data={campaignTemplates}
          onClickRow={onClickRow}
          layout={{
            columns: [
              {
                label: "Título",
                path: "name",
              },
              {
                label: "Texto",
                path: "content",
              },
            ],
          }}
          // optionMenu={{ items: [{ Component: UpdateTemplate }, { Component: DeleteTemplate }] }}
        />
      </Box>
    </Box>
  );
};
