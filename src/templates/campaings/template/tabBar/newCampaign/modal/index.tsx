import React, { useMemo } from "react";

import { useRouter } from "next/router";

import { useDisclosure } from "@chakra-ui/react";

import { CampaignType } from "@continuapro/entity";
import { CreateCampaignsArgs } from "@continuapro/redux";

import { Modal } from "@/components";
import { useOnSubmit } from "@/hooks";
import { useAction, useSelector } from "@/store";

import { NewCampaignForm } from "../form";

export const NewCampaignModal = () => {
  const { createCampaign } = useAction();
  const { isLoading } = useSelector(({ campaigns }) => campaigns.sms.createCampaign);

  const { pathname, push } = useRouter();

  const campaignType = useMemo<CampaignType>(() => pathname.split("/")[2] as CampaignType, [pathname]);

  const disclosure = useDisclosure();

  const { onSubmit } = useOnSubmit<CreateCampaignsArgs>();

  return (
    <Modal
      {...disclosure}
      btnOpen={{ colorScheme: "primary", label: "Nueva Campaña" }}
      title="Agregar Nueva Campaña"
      isLoading={isLoading}
      btnPri={{ label: "Guardar Campaña" }}
      FormChild={NewCampaignForm}
      onSubmit={async (values) => {
        const { payload } = await onSubmit({
          action: createCampaign,
          values: { campaign: { name: values.name, description: values.description, category: 0 }, campaignType },
          disclosure,
          option: { keepOpenWhenDone: true },
        });

        push(`/campaigns/${campaignType}/${payload.data.data.id}/settings-view`);
      }}
    />
  );
};
