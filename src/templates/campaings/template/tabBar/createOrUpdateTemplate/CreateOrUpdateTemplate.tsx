import React, { FC, ReactElement } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

import { CreateOrUpdateTemplateForm } from "./CreateOrUpdateTemplateForm";
import { CreateOrUpdate } from "@continuapro/form";

interface CreateOrUpdateTemplateProps {
  button: ReactElement;
  type: CreateOrUpdate;
  defaultValues?: {
    title: string;
    text: string;
  };
}

export const CreateOrUpdateTemplate: FC<CreateOrUpdateTemplateProps> = ({ button, type, defaultValues }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <>
      <Box onClick={onOpen}>{button}</Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{type === "CREATE" ? "Crear" : "Actualizar"} Plantilla</ModalHeader>
          <ModalBody>
            <CreateOrUpdateTemplateForm onSubmit={onSubmit} defaultValues={defaultValues} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" colorScheme="primary" form="update-template-form">
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
