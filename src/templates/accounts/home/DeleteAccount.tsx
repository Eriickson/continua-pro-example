import { AlertDialog } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { MenuItem } from "@chakra-ui/react";
import { Account } from "@continuapro/entity";
import React, { FC } from "react";

interface DeleteAccountProps {
  account: Account;
}

export const DeleteAccount: FC<DeleteAccountProps> = ({ account }) => {
  const { deleteAccount } = useAction();

  const handleResponse = useHandleResponse();

  async function handleDelete() {
    const response = await deleteAccount({ id: account.id });
    handleResponse(response);
  }

  return (
    <AlertDialog
      title="Eliminar Plantilla"
      btnPri={{
        colorSchema: "red",
        label: "Sí, Eliminar",
        onClick: handleDelete,
      }}
      button={<MenuItem>Eliminar</MenuItem>}
    />
  );
};
