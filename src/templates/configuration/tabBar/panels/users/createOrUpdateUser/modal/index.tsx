import React, { FC, ReactElement, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { CreateOrUpdateUserFormValues, CreateOrUpdate } from "@continuapro/form";

import { Modal } from "@/components";

import { CreateOrUpdateContactForm } from "../form";
import { AssigningRolesUsers } from "./AssigningRolesUsers";
import { useOnSubmit } from "@/hooks";
import { CreateUserArgs, UpdateUserArgs } from "@continuapro/redux";
import { useAction, useSelector } from "@/store";

export interface CreateOrUpdateUserModalProps {
  button: ReactElement;
  defaultValues?: any;
  type: CreateOrUpdate;
}

export const CreateOrUpdateUserModal: FC<CreateOrUpdateUserModalProps> = ({ button, type, defaultValues }) => {
  const { createUser, updateUser } = useAction();

  const { isLoading } = useSelector(({ users }) => users.createUser);

  const disclosure = useDisclosure();
  const disclosureAssigningRoles = useDisclosure();

  const [newUser, setNewUser] = useState<CreateOrUpdateUserFormValues | undefined>(defaultValues);

  const { onSubmit } = useOnSubmit<CreateUserArgs | UpdateUserArgs>();

  async function showPermissions(values: CreateOrUpdateUserFormValues) {
    setNewUser(values);
    disclosure.onClose();
    disclosureAssigningRoles.onOpen();
  }

  return (
    <>
      <Modal
        modalProps={{ size: "md" }}
        subtitle="Información del Usuario"
        title={type === "CREATE" ? "Crear Usuario" : "Actualizar Usuario"}
        {...disclosure}
        customButton={button}
        FormChild={CreateOrUpdateContactForm}
        onSubmit={showPermissions}
        btnPri={{ label: "Siguiente" }}
        defaultValues={newUser}
        formType={type}
      />
      <Modal
        isLoading={isLoading}
        modalProps={{ size: "md" }}
        subtitle="Información del Usuario"
        title={type === "CREATE" ? "Crear Usuario" : "Actualizar Usuario"}
        {...disclosureAssigningRoles}
        onSubmit={showPermissions}
        customButton={<></>}
        btnSec={{
          label: "Atrás",
          onClick: () => {
            disclosure.onOpen();
            disclosureAssigningRoles.onClose();
          },
        }}
        btnPri={{
          label: "Guardar usuario",
          onClick: async () => {
            if (newUser) {
              const { passwordConfirmation, email, name, password, role } = newUser;
              const user = { name, email, role_id: Number(role.value) };

              if (password) {
                Object.assign(user, { password, password_confirmation: passwordConfirmation });
              }

              await onSubmit({
                action: type === "CREATE" ? createUser : updateUser,
                disclosure: disclosureAssigningRoles,
                values: { user, id: Number(defaultValues.id) },
              });

              setNewUser(undefined);
            }
          },
        }}
      >
        <AssigningRolesUsers roleSelected={String(newUser?.role?.label)} />
      </Modal>
    </>
  );
};
