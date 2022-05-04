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
} from "@chakra-ui/react";
import { AddPriceArrayModalForm } from "./AddPriceArrayModalForm";
import { useAction, useSelector } from "@/store";
import { PriceArray } from "@/types";
import { useHandleResponse } from "@/hooks";

export const AddPriceArrayModal = () => {
  const { createPriceArray } = useAction();
  const { isLoading } = useSelector(({ creditPlans }) => creditPlans.createPriceArray);

  const handleResponse = useHandleResponse();

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleSubmit(values: PriceArray) {
    const response: any = await createPriceArray({ price_array: values });
    handleResponse(response, onClose);
  }

  return (
    <div>
      <Button colorScheme="primary" onClick={onOpen}>
        Agregar Precios
      </Button>

      <Modal
        closeOnEsc={!isLoading}
        closeOnOverlayClick={!isLoading}
        size="sm"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nuevo Paquete de precios</ModalHeader>
          <ModalBody>
            <AddPriceArrayModalForm onSubmit={handleSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button size="sm" mr={3} onClick={onClose} variant="ghost" isDisabled={isLoading}>
              Cancelar
            </Button>
            <Button
              size="sm"
              colorScheme="primary"
              form="add-price-array-modal-form"
              type="submit"
              isLoading={isLoading}
              loadingText="Guardando..."
            >
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
