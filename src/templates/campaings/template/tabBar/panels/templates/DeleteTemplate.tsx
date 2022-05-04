import { AlertDialog } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { MenuItem } from "@chakra-ui/react";
import React, { FC } from "react";

interface DeleteTemplateProps {
  args: any;
}

export const DeleteTemplate: FC<DeleteTemplateProps> = ({ args }) => {
  const { deleteCampaignTemplate } = useAction();

  const handleResponse = useHandleResponse();

  async function handleDelete() {
    const response = await deleteCampaignTemplate({ campaignType: "sms", id: args.item.id });

    handleResponse(response);
  }

  return (
    <AlertDialog
      title="Eliminar Plantilla"
      btnPri={{
        colorSchema: "red",
        label: "Sí, Eliminar",
        onClick: handleDelete,
      }}
      button={<MenuItem>Eliminar</MenuItem>}
    />
  );
};
