import React, { FC } from "react";
import { IconButton } from "@chakra-ui/react";

import { Trash2 } from "react-feather";

import { AlertDialog } from "@/components";
import { useAction, useSelector } from "@/store";
import { useHandleResponse } from "@/hooks";

interface DeleteSegmentProps {
  id: number;
  resetForm(): void;
}

export const DeleteSegment: FC<DeleteSegmentProps> = ({ id, resetForm }) => {
  const { deleteContactSegment } = useAction();
  const { isLoading } = useSelector(({ contactSegments }) => contactSegments.deleteContactSegment);
  const handleResponse = useHandleResponse();

  async function handlerDelete() {
    const response: any = await deleteContactSegment({ id });
    handleResponse(response, resetForm);
  }

  return (
    <div>
      <AlertDialog
        isDisabled={!id}
        title="Eliminar Segmento"
        btnPri={{
          colorSchema: "red",
          label: "Sí, Eliminar",
          onClick: handlerDelete,
        }}
        button={
          <IconButton
            _focus={{}}
            size="sm"
            colorScheme="red"
            aria-label="Eliminar segment"
            icon={<Trash2 size="1.25rem" />}
            isDisabled={!id}
            isLoading={isLoading}
          />
        }
      />
    </div>
  );
};

/* 
TODO: standard messages
title: "Segmento eliminado",
        description: "El segmento ha sido eliminado correctamente" */
