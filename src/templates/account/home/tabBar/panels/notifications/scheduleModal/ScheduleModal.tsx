import React, { useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";
import moment from "moment";
import { ScheduleForm } from "./ScheduleForm";
import { useAction, useSelector } from "@/store";
import { NotificationSchedule } from "@continuapro/entity";
import { useHandleResponse } from "@/hooks";

export const ScheduleModal = () => {
  const { createNotificationSchedule } = useAction();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isLoading } = useSelector(({ notificationSchedules }) => notificationSchedules.createNotificationSchedule);

  const handleResponse = useHandleResponse();

  async function onSubmit(values: NotificationSchedule) {
    const startTimeIsValid = moment(values.start_time, "HH:mm");
    const endTimeIsValid = moment(values.end_time, "HH:mm");

    if (!startTimeIsValid.isValid() || !endTimeIsValid.isValid()) {
      toast({
        title: "Error de validación",
        description: "Las fechas no tienen un formato correcto",
        position: "top-right",
        variant: "left-accent",
        status: "error",
      });
      return;
    }

    if (startTimeIsValid.isAfter(endTimeIsValid)) {
      toast({
        title: "Error de validación",
        description: "La hora inicio debe ser menor a la hora fin",
        position: "top-right",
        variant: "left-accent",
        status: "error",
      });
      return;
    }
    const response = await createNotificationSchedule({ notification_schedule: values });

    handleResponse(response, onClose);
  }

  return (
    <div>
      <Button colorScheme="primary" onClick={onOpen}>
        Agregar Personalizado
      </Button>
      <Modal size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ScheduleForm onSubmit={onSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              form="create-schedule-form"
              colorScheme="primary"
              isLoading={isLoading}
              loadingText="Guardando Cambios..."
            >
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
