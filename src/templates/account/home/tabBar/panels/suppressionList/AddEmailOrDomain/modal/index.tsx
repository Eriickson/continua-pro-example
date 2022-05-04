import React from "react";

import { useDisclosure } from "@chakra-ui/react";

import { useAction, useSelector } from "@/store";

import { Modal } from "@/components";

import { AddEmailOrDomainForm } from "../form";
import { CreateSusppressionListItemArgs } from "@continuapro/redux";
import { useOnSubmit } from "@/hooks";

export const AddEmailOrDomainModal = () => {
  const { createSuppressionListItem } = useAction();
  const { isLoading } = useSelector(({ suppressionList }) => suppressionList.createSuppressionListItem);

  const disclosure = useDisclosure();

  const { onSubmit } = useOnSubmit<CreateSusppressionListItemArgs>();

  return (
    <Modal
      {...disclosure}
      isLoading={isLoading}
      btnOpen={{ colorScheme: "primary", label: "Agregar email/domain" }}
      title="Agregar email o dominio"
      subtitle="Cualquier contacto que coincida con estos dominios de anuncios de correo electrónico se suprimirá al enviar cualquier tipo de correo electrónico."
      btnPri={{ label: "Guardar email o dominio" }}
      FormChild={AddEmailOrDomainForm}
      modalProps={{ size: "lg" }}
      onSubmit={(values) =>
        onSubmit({
          action: createSuppressionListItem,
          values: { suppression_list_entry: { email_or_domain: values.emailOrDomain } },
          disclosure,
        })
      }
    />
  );
};
