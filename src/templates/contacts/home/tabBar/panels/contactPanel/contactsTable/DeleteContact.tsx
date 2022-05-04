import React, { FC } from "react";
import { MenuItem } from "@chakra-ui/react";
import { AlertDialog } from "@/components";
import { useAction } from "@/store";
import { useToast } from "@/hooks";

interface DeleteContactProps {
  id: number;
}

export const DeleteContact: FC<DeleteContactProps> = ({ id }) => {
  const { deleteContact } = useAction();
  const { showToast } = useToast();

  async function handleDelete() {
    const response: any = await deleteContact({ id });

    if (response.payload.status === 204) {
      showToast({
        status: "success",
        title: "Contacto eliminado",
        description: "El contacto ha sido eliminado correctamente",
      });
    }
  }

  return (
    <>
      <AlertDialog
        title="Eliminar Usuario"
        btnPri={{
          label: "Eliminar",
          colorSchema: "red",
          onClick: handleDelete,
        }}
        button={<MenuItem>Eliminar</MenuItem>}
      />
    </>
  );
};
