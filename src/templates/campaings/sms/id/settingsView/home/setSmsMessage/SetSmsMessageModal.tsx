import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  HStack,
} from "@chakra-ui/react";
import { SetSmsMessageTabBar } from "./tabBar/SetSmsMessageTabBar";
import { useAction, useSelector } from "@/store";
import { useRouter } from "next/router";
import { useHandleResponse } from "@/hooks";

export const SetSmsMessageModal = () => {
  const { query } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateCampaign } = useAction();
  const { isLoading } = useSelector(({ campaigns }) => campaigns.sms.updateCampaign);

  const handleResponse = useHandleResponse();

  async function setMsgSms(template: any) {
    const response = await updateCampaign({
      id: Number(query.id),
      campaign: { campaign_template_id: template.id },
      campaignType: "sms",
    });

    handleResponse(response, onClose);
  }

  return (
    <>
      <HStack spacing="4">
        <Button variant="outline" colorScheme="primary" onClick={onOpen}>
          Establecer Mensaje de SMS
        </Button>
      </HStack>
      <Modal size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb="2">Establecer Mensaje de SMS</ModalHeader>
          <ModalBody rounded="none" p="0">
            <SetSmsMessageTabBar onClickRow={setMsgSms} />
          </ModalBody>

          <ModalFooter bgColor="white" display="block" p="3">
            <HStack justifyContent="flex-end">
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" form="create-new-template-form" colorScheme="primary" isLoading={isLoading}>
                Guardar
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
