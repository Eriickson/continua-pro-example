import { AlertDialog } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { MenuItem } from "@chakra-ui/react";
import { CampaignType } from "@continuapro/entity";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface DeleteCampaingProps {
  id: number;
}

export const DeleteCampaing: FC<DeleteCampaingProps> = ({ id }) => {
  const { deleteCampaign } = useAction();

  const { pathname } = useRouter();

  const handleResponse = useHandleResponse();

  async function handleDelete() {
    const campaignType = pathname.split("/")[2] as CampaignType;

    const response = await deleteCampaign({ id, campaignType });

    handleResponse(response);

    console.log("delete");
  }

  return (
    <AlertDialog
      button={<MenuItem>Eliminar</MenuItem>}
      title="Eliminar Campaña"
      btnPri={{
        colorSchema: "red",
        label: "Sí, Eliminar",
        onClick: handleDelete,
      }}
    />
  );
};
