import React, { FC } from "react";

import { Flex, IconButton } from "@chakra-ui/react";

import { Trash2 } from "react-feather";

import { useAction, useSelector } from "@/store";
import { useHandleResponse } from "@/hooks";
import { AlertDialog } from "@/components";

interface DeleteSuppressionItemProps {
  suppressionId: number;
}

export const DeleteSuppressionItem: FC<DeleteSuppressionItemProps> = ({ suppressionId }) => {
  const { deleteSuppressionListItem } = useAction();
  const handlerResponse = useHandleResponse();

  const { isLoading } = useSelector(({ suppressionList }) => suppressionList.deleteSuppressionListItem);

  async function handleDelete() {
    const response = await deleteSuppressionListItem({ id: suppressionId });
    handlerResponse(response);
  }

  return (
    <Flex justifyContent="flex-end">
      <AlertDialog
        title="Eliminar Email o dominio"
        btnPri={{
          label: "Eliminar",
          colorSchema: "red",
          onClick: handleDelete,
        }}
        button={
          <IconButton
            _focus={{}}
            colorScheme="red"
            variant="ghost"
            size="sm"
            icon={<Trash2 size="1rem" />}
            aria-label="Eliminar item"
            isLoading={isLoading}
          />
        }
      />
    </Flex>
  );
};
