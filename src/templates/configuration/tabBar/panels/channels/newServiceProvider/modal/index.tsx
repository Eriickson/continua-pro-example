import React from "react";

import { useDisclosure } from "@chakra-ui/react";

import { useAction, useSelector } from "@/store";

import { Modal } from "@/components";

import { NewServiceProviderForm } from "../form";

import { useOnSubmit } from "@/hooks";

export const NewServiceProviderModal = () => {
  const disclosure = useDisclosure();

  return (
    <Modal
      {...disclosure}
      btnOpen={{ colorScheme: "primary", label: "Nuevo Proveedor de Servicios" }}
      title="Agregar Proveedor de Servicios"
      btnPri={{ label: "Guadar Proveedor" }}
      FormChild={NewServiceProviderForm}
      onSubmit={(values) => {}}
    />
  );
};
