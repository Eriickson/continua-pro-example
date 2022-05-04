import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import { CreateReportForm } from "./CreateReportForm";
import { useAction } from "@/store";

export const CreateReport = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const { getChannels } = useAction();

  // useEffect(() => {
  //   isOpen && getChannels();
  // }, [isOpen]);

  return (
    <>
      <Button onClick={onOpen} colorScheme="primary">
        Crear reporte
      </Button>

      <Modal
        closeOnOverlayClick={false}
        size="lg"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Reporte</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateReportForm />
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="primary">Guardar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
