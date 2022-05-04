import React from "react";

import { MainTable } from "@/components";
import { Flex, IconButton } from "@chakra-ui/react";
import { X } from "react-feather";
import { useAction, useSelector } from "@/store";
import { useHandleResponse } from "@/hooks";

export const TableContactSegment = () => {
  const { removeContactFromSegment } = useAction();
  const { isLoading } = useSelector(({ contactSegments }) => contactSegments.getContactSegment);
  const { contactSegment } = useSelector(({ contactSegments }) => contactSegments);

  const handleResponse = useHandleResponse();

  async function handleRemoveContactFromSegment(id: number, contact_ids: number[]) {
    const response = await removeContactFromSegment({ id: id, contact_ids });
    handleResponse(response);
  }

  return (
    <div>
      <MainTable
        layout={{
          columns: [
            { label: "Correo Electrónico", path: "email" },
            { label: "Fecha Agregado", path: "contact_since" },
            { label: "Estado", path: "status", type: "badge" },
            { label: "Nombre", path: "name" },
            {
              label: "",
              path: "id",
              customComponent: ({ row }) => {
                return (
                  <Flex justifyContent="flex-end">
                    <IconButton
                      isDisabled={isLoading}
                      size="sm"
                      colorScheme="red"
                      variant="ghost"
                      aria-label="eliminar del segmento"
                      icon={<X size="1.25rem" />}
                      onClick={() => handleRemoveContactFromSegment(contactSegment?.id || 0, [row.id])}
                      _focus={{}}
                    />
                  </Flex>
                );
              },
            },
          ],
        }}
        data={contactSegment?.contacts}
      />
    </div>
  );
};
