import React, { FC } from "react";

import { MenuItem } from "@chakra-ui/react";

import { AlertDialog } from "@/components";
import { useAction } from "@/store";
import { useHandleResponse } from "@/hooks";

interface DeleteSenderProps {
  id: number;
}

export const DeleteSender: FC<DeleteSenderProps> = ({ id }) => {
  const { deleteSender } = useAction();

  const handleResponse = useHandleResponse();

  async function handleDelete() {
    const response: any = await deleteSender({ id });
    handleResponse(response);
  }

  return (
    <div>
      <AlertDialog
        button={<MenuItem>Eliminar</MenuItem>}
        title="Eliminar Sender"
        btnPri={{ colorSchema: "red", label: "Eliminar", onClick: () => handleDelete() }}
      />
    </div>
  );
};
