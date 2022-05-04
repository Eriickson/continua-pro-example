import React, { useEffect } from "react";

import { CreateCreditPlanArgs } from "@continuapro/redux";

import { useDisclosure } from "@chakra-ui/react";

import { useAction, useSelector } from "@/store";
import { useOnSubmit } from "@/hooks";
import { Modal } from "@/components";

import { NewPlaForm } from "../form";

export const NewPlanModal = () => {
  const { createCreditPlan, getChannels } = useAction();
  const { isLoading } = useSelector(({ creditPlans }) => creditPlans.createCreditPlan);

  const disclosure = useDisclosure();

  const { onSubmit } = useOnSubmit<CreateCreditPlanArgs>();

  useEffect(() => {
    disclosure.isOpen && getChannels();
  }, [disclosure.isOpen]);

  return (
    <Modal
      {...disclosure}
      isLoading={isLoading}
      btnOpen={{ label: "Nuevo Plan", colorScheme: "primary" }}
      title="Agregar Nuevo Plan"
      btnPri={{ label: "Guardar Plan" }}
      FormChild={NewPlaForm}
      onSubmit={(values) =>
        onSubmit({
          action: createCreditPlan,
          disclosure,
          values: { credit_plan: { name: values.name, channel_id: Number(values.channel.value) } },
        })
      }
    />
  );
};
