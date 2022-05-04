import React from "react";
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
  Text,
} from "@chakra-ui/react";

export const ReportGenerationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>ReportGenerationModal</Button>
      <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Generación de Reporte</ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody>
            <Text color="primary.900" mb="2" lineHeight="base">
              El proceso de generación del reporte puede tomar varios minutos en
              concluir, el tiempo dependerá de los registros encontrados en el
              rango de fechas que solicitaste.
            </Text>
            <Text color="primary.900" lineHeight="normal">
              ¿Estás seguro que deseas continuar?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="primary">Confirmar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
