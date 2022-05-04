import { Contact, useAgency } from "@/contexts";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { EditContactForm } from "./EditContactForm";

interface ModalEditContactProps {
  contact: Contact;
}

export const ModalEditContact: FC<ModalEditContactProps> = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="primary" onClick={onOpen}>
        Editar
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb="5" textAlign="center">
            <Heading fontSize="3xl" fontWeight="normal" color="secondary.500">
              importar contactos
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditContactForm
              contact={contact}
              onSubmit={async (newValues) => {
                // const isUpdated = await updateContact(contact.id, newValues);
                // isUpdated && onClose();
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="primary"
              type="submit"
              form="form-update-contact"
            >
              Actualizar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
