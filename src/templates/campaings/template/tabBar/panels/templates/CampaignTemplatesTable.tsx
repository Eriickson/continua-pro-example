import { MainTable } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction, useSelector } from "@/store";
import { TableColumn } from "@/types";
import { Badge } from "@chakra-ui/react";
import { CampaignType } from "@continuapro/entity";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { DeleteTemplate } from "./DeleteTemplate";

export const CampaignTemplatesTable = () => {
  const { createCampaign } = useAction();
  const { pathname, push } = useRouter();
  const handleResponse = useHandleResponse();

  const { campaignTemplates } = useSelector(
    ({ campaignTemplates }) => campaignTemplates[pathname.split("/")[2] as CampaignType]
  );

  async function handleClick(values: any) {
    const response: any = await createCampaign({
      campaign: { campaign_template_id: values.id, category: 0 },
      campaignType: pathname.split("/")[2] as CampaignType,
    });

    handleResponse(response, () => {
      push(`/campaigns/sms/${response.payload.data.data.id}/settings-view`);
    });
  }

  const columns = useMemo<TableColumn[]>(() => {
    let columns = [
      { label: "Título", path: "name" },
      { label: "Contenido", path: "content" },
    ];

    columns = pathname.includes("whatsapp")
      ? [
          ...columns,
          {
            label: "Estatus",
            path: "status",
            customComponent: ({ row }: any) => <Badge colorScheme="green">Aprobado</Badge>,
          } as any,
        ]
      : columns;

    return columns;
  }, []);

  return (
    <MainTable
      data={campaignTemplates}
      layout={{
        columns,
      }}
      optionMenu={{ items: [/* { Component: UpdateTemplate }, */ { Component: DeleteTemplate }] }}
      onClickRow={handleClick}
    />
  );
};
