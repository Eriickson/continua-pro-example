import { Modal } from "@/components";
import { useOnSubmit } from "@/hooks";
import { useAction, useSelector } from "@/store";
import { useDisclosure } from "@chakra-ui/react";
import { CampaignType } from "@continuapro/entity";
import { CreateCampaignTemplateArgs } from "@continuapro/redux";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { NewCampaignTemplateForm } from "../form";

export const NewCampaignTemplateModal = () => {
  const { createCampaignTemplate } = useAction();

  const { pathname } = useRouter();

  const campaignType = useMemo<CampaignType>(() => pathname.split("/")[2] as CampaignType, [pathname]);

  const { isLoading } = useSelector(({ campaignTemplates }) => campaignTemplates[campaignType].createCampaignTemplate);

  const disclosure = useDisclosure();

  const { onSubmit } = useOnSubmit<CreateCampaignTemplateArgs>();

  return (
    <div>
      <Modal
        {...disclosure}
        isLoading={isLoading}
        btnOpen={{ label: "Nueva Plantilla", colorScheme: "primary" }}
        title="Agregar Nueva Plantilla"
        modalProps={{ size: "md" }}
        btnPri={{ label: "Guardar Plantilla" }}
        onSubmit={(values) =>
          onSubmit({ disclosure, action: createCampaignTemplate, values: { campaign_template: values, campaignType } })
        }
        FormChild={NewCampaignTemplateForm}
      />
    </div>
  );
};
