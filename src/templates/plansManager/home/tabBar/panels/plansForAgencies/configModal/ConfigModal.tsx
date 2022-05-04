import React, { FC } from "react";
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
} from "@chakra-ui/react";
import { CreditPlan } from "@/contexts";
import { DeletePlan } from "./DeletePlan";
import { useRouter } from "next/router";

interface ConfigModalProps {
  creditPlan: CreditPlan;
}

export const ConfigModal: FC<ConfigModalProps> = ({ creditPlan }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { push } = useRouter();
  return (
    <>
      <Button
        // onClick={onOpen}
        display="block"
        mx="auto"
        colorScheme="blue"
        px="16"
        onClick={() => push(`/plans-manager/${creditPlan.id}`)}
      >
        Configurar
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="secondary.500">
            Plan {creditPlan.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hola, soy un modal</ModalBody>

          <ModalFooter px="4">
            <DeletePlan id={creditPlan.id} onClick={onClose} />
            <Button colorScheme="primary" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
