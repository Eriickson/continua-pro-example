import React, { useState } from "react";

import { Modal } from "@/components";

import { NewUserForm } from "../form/NewUserForm";
import { useDisclosure } from "@chakra-ui/react";
import { NewUserFormValues } from "@continuapro/form";

export const NewUserModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const disclosure = useDisclosure();

  async function onSubmit(values: NewUserFormValues) {
    setIsLoading(true);
    console.log(values);

    setTimeout(() => {
      setIsLoading(false);
      disclosure.onClose();
    }, 2000);
  }

  return (
    <div>
      <Modal
        {...disclosure}
        isLoading={isLoading}
        btnOpen={{ colorScheme: "primary", label: "Open Modal", onClick: () => {} }}
        title="Nuevo usuario"
        btnPri={{ label: "Guardar usuario" }}
        FormChild={NewUserForm}
        onSubmit={onSubmit}
      />
    </div>
  );
};
