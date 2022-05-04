import React, { FC } from "react";

import { MenuItem, chakra } from "@chakra-ui/react";
import { Trash2 } from "react-feather";
import { AlertDialog } from "@/components";
import { useAction } from "@/store";
import { useHandleResponse } from "@/hooks";

interface DeleteUserProps {
  userId: number;
}

export const DeleteUser: FC<DeleteUserProps> = ({ userId }) => {
  const { deleteUser } = useAction();
  const handleResponse = useHandleResponse();

  async function handlerDeleteUser() {
    const response: any = await deleteUser({ id: userId });
    handleResponse(response);
  }

  return (
    <>
      <AlertDialog
        button={
          <MenuItem color="red.600" icon={<Trash2 size="1.25rem" />}>
            <chakra.b>Eliminar</chakra.b>
          </MenuItem>
        }
        title="Eliminar Usuario"
        btnPri={{ colorSchema: "red", label: "Sí, Eliminar", onClick: handlerDeleteUser }}
      />
    </>
  );
};
