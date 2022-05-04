import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useAction, useSelector } from "@/store";

import { CreateEmailMarketingForm } from "./CreateEmailMarketingForm";
import { useRouter } from "next/router";

export type CreateEmailMarketingFormType = {
  name: string;
  description: string;
};

export const CreateEmailMarketing = () => {
  const { createCampaign, createCampaignSchedule } = useAction();

  const { isLoading } = useSelector(({ campaigns }) => campaigns.mailing.createCampaign);
  const { isLoading: createCampaignScheduleIsLoading } = useSelector(
    ({ campaigns }) => campaigns.mailing.createCampaignSchedule
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { push } = useRouter();

  async function onSubmit(values: CreateEmailMarketingFormType) {
    const { description, name } = values;

    const response: any = await createCampaign({
      campaign: { description, name, category: 0 },
      campaignType: "mailing",
    });
    const campaignId = response.payload.data.data.id;

    await createCampaignSchedule({
      campaignSchedule: { scheduling_type: 0, campaign_id: campaignId },
    });

    push(`/campaigns/mailing/${campaignId}/settings-view`);
  }

  return (
    <>
      <Button colorScheme="primary" onClick={onOpen}>
        Nueva Campaña
      </Button>

      <Modal
        closeOnEsc={!isLoading || !createCampaignScheduleIsLoading}
        closeOnOverlayClick={!isLoading || !createCampaignScheduleIsLoading}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nueva Campaña</ModalHeader>
          <ModalBody>
            <CreateEmailMarketingForm onSubmit={onSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button isDisabled={isLoading || createCampaignScheduleIsLoading} variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              form="create-email-marketing-form"
              colorScheme="primary"
              isLoading={isLoading || createCampaignScheduleIsLoading}
              loadingText="Guardando..."
            >
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
