import React, { FC, ReactElement } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { Modal } from "@/components";
import { useOnSubmit } from "@/hooks";
import { useAction, useSelector } from "@/store";
import { CreateOrUpdateSegmentForm } from "../form";
import { CreateContactSegmentArgs, UpdateContactSegmentArgs } from "@continuapro/redux";
import { ContactSegment } from "@/types";
import { CreateOrUpdate } from "@continuapro/form";

export interface CreateOrUpdateSegmentModalProps {
  button: ReactElement;
  type: CreateOrUpdate;
  isDisabled?: boolean;
  defaultValues?: ContactSegment;
}

export const CreateOrUpdateSegmentModal: FC<CreateOrUpdateSegmentModalProps> = ({ button, type, defaultValues }) => {
  const { createContactSegment, updateContactSegment } = useAction();
  const { isLoading } = useSelector(({ contactSegments }) => contactSegments.createContactSegment);

  const disclosure = useDisclosure();

  const { onSubmit } = useOnSubmit<CreateContactSegmentArgs | UpdateContactSegmentArgs>();

  return (
    <Modal
      {...disclosure}
      isLoading={isLoading}
      customButton={button}
      title={`${type === "CREATE" ? "Agregar Nuevo" : "Editar"} Segmento`}
      btnPri={{ label: type === "CREATE" ? "Guardar Segmento" : "Guardar Cambios" }}
      FormChild={CreateOrUpdateSegmentForm}
      defaultValues={defaultValues}
      onSubmit={(values) =>
        onSubmit({
          action: type === "CREATE" ? createContactSegment : updateContactSegment,
          disclosure,
          values: { contact_segment: { name: values.name }, id: defaultValues?.id },
        })
      }
    />
  );
};
