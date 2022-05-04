import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { BuyPlanForm } from "./BuyPlanForm";

export const BuyPlanModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price] = useState(10);

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Comprar Ahora
      </Button>

      <Modal size="sm" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Text color="secondary.500" fontSize="2xl">
              ${price}
            </Text>
            <Text fontSize="sm" lineHeight="4" fontWeight="normal">
              Custom product
            </Text>
          </ModalHeader>
          <ModalBody>
            <BuyPlanForm />
          </ModalBody>
          <ModalFooter pt="0">
            <Button w="full" colorScheme="primary" type="submit" form="buy-plan-form">
              Pagar ${price}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
