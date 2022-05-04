import { Box, Modal, ModalContent, ModalOverlay, useDisclosure, ModalCloseButton } from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import { useSelector } from "@/store";
import { Contact } from "@continuapro/entity";
import { NewContact } from "./CreateOrUpdateContact";
import { CreateOrUpdate } from "@continuapro/form";

interface CreateOrUpdateContactModalProps {
  button: ReactElement;
  type: CreateOrUpdate;
  defaultValues?: Contact;
}

export const CreateOrUpdateContactModal: FC<CreateOrUpdateContactModalProps> = ({ button, type, defaultValues }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading: createContactIsLoading } = useSelector(({ contacts }) => contacts.createContact);
  const { isLoading: updateContactIsLoading } = useSelector(({ contacts }) => contacts.updateContact);

  return (
    <>
      <Box onClick={onOpen}>{button}</Box>
      <Modal
        size="2xl"
        closeOnEsc={!createContactIsLoading || !updateContactIsLoading}
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalCloseButton _focus={{}} />
          <NewContact onClose={onClose} type={type} defaultValues={defaultValues} />
        </ModalContent>
      </Modal>
    </>
  );
};
