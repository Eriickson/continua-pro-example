import React, { FC, ReactElement } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { Modal } from "@/components";
import { useOnSubmit } from "@/hooks";

import { useAction, useSelector } from "@/store";

import { CreateOrUpdateSenderForm } from "../form";
import { CreateSenderArgs, UpdateSenderArgs } from "@continuapro/redux";
import { Sender } from "@continuapro/entity";
import { CreateOrUpdate } from "@continuapro/form";
import { useRouter } from "next/router";

export interface CreateOrUpdateSenderModalProps {
  type: CreateOrUpdate;
  button: ReactElement;
  defaultValues?: Sender;
}

export const CreateOrUpdateSenderModal: FC<CreateOrUpdateSenderModalProps> = ({ type, button, defaultValues }) => {
  const { createSender, updateSender } = useAction();

  const { isLoading: createSenderIsLoading } = useSelector(({ senders }) => senders.createSender);
  const { isLoading: updateSenderIsLoading } = useSelector(({ senders }) => senders.updateSender);

  const { query } = useRouter();

  const disclosure = useDisclosure();

  const { onSubmit } = useOnSubmit<CreateSenderArgs | UpdateSenderArgs>();

  return (
    <Modal
      {...disclosure}
      isLoading={createSenderIsLoading || updateSenderIsLoading}
      title={`${type === "UPDATE" ? "Actualice" : "Ingrese"} los detalles del sender`}
      FormChild={CreateOrUpdateSenderForm}
      onSubmit={(contact) => {
        onSubmit({
          values: { id: Number(query.id), contact },
          action: type === "UPDATE" ? updateSender : createSender,
          disclosure,
        });
      }}
      defaultValues={defaultValues}
      customButton={button}
      btnPri={{ label: "Guardar Sender" }}
    />
  );
};
