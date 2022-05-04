import { Modal } from "@/components";
import { useDisclosure } from "@chakra-ui/react";
import { useOnSubmit } from "@/hooks";
import { useAction, useSelector } from "@/store";
import React from "react";
import { SendTestForm } from "../form";
import { SendTestCampaignArgs } from "@continuapro/redux";
import { useRouter } from "next/router";

export const SendTestModal = () => {
  const { sentTestCampaign } = useAction();
  const { isLoading } = useSelector(({ campaigns }) => campaigns.mailing.sentTestCampaign);

  const { query } = useRouter();

  const disclosure = useDisclosure();
  const { onSubmit } = useOnSubmit<SendTestCampaignArgs>();

  return (
    <Modal
      {...disclosure}
      isLoading={isLoading}
      btnOpen={{ label: "Enviar Prueba" }}
      title="Enviar Prueba"
      btnPri={{ label: "Enviar Prueba" }}
      FormChild={SendTestForm}
      onSubmit={(values) =>
        onSubmit({
          action: sentTestCampaign,
          disclosure,
          values: { recipient: values.recipient, campaignId: Number(query.id), campaignType: "mailing" },
        })
      }
      endLoadingDelay={100}
    />
  );
};
