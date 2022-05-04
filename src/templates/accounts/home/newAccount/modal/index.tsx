import React from "react";

import { useDisclosure } from "@chakra-ui/react";

import { Modal } from "@/components";
import { useOnSubmit } from "@/hooks";
import { useAction, useSelector } from "@/store";
import { CreateAccountArgs } from "@continuapro/redux";
import { NewAccountForm } from "../form";

export const NewAccountModal = () => {
  const { createAccount } = useAction();
  const { isLoading } = useSelector(({ accounts }) => accounts.createAccount);

  const disclosure = useDisclosure();

  const { onSubmit } = useOnSubmit<CreateAccountArgs>();

  return (
    <Modal
      {...disclosure}
      isLoading={isLoading}
      btnOpen={{ label: "Nueva Cuenta", colorScheme: "primary" }}
      title="Agregar Nueva Cuenta"
      btnPri={{ label: "Guardar Cuenta" }}
      FormChild={NewAccountForm}
      onSubmit={(values) =>
        onSubmit({ values: { account: { ...values, active: true } }, action: createAccount, disclosure })
      }
      modalProps={{ size: "lg" }}
    />
  );
};
