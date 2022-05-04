import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  HStack,
} from "@chakra-ui/react";

import { NewChannelServiceProviderSettingFormValues } from "@continuapro/form";

import { NewChannelServiceProviderSettingForm } from "./form/NewChannelServiceProviderSettingForm";
import { ArrowLeft } from "react-feather";
import { useRouter } from "next/router";

export const NewChannelServiceProviderSettingModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { push } = useRouter();

  async function onSubmit(values: NewChannelServiceProviderSettingFormValues) {
    console.log(values);
  }

  return (
    <>
      <HStack>
        <Button
          colorScheme="secondary"
          pl="3"
          variant="ghost"
          _focus={{}}
          leftIcon={<ArrowLeft />}
          onClick={() => push({ pathname: "/configuration", query: { main_tabbar: 3 } })}
        >
          Regresar
        </Button>
        <Button colorScheme="primary" onClick={onOpen}>
          Nuevo Campo
        </Button>
      </HStack>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewChannelServiceProviderSettingForm onSubmit={onSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} variant="ghost">
              Cancelar
            </Button>
            <Button colorScheme="blue" type="submit" form="new-channel-service-provider-setting-form">
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
