import { AlertDialog } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { Contact } from "@continuapro/entity";
import { MenuItem } from "@chakra-ui/react";
import React, { FC } from "react";

interface AddToSuppressionListProps {
  contact: Contact;
}

export const AddToSuppressionList: FC<AddToSuppressionListProps> = ({ contact }) => {
  const { createSuppressionListItem } = useAction();

  const handleResponse = useHandleResponse();

  async function handleClick() {
    const response = await createSuppressionListItem({ suppression_list_entry: { email_or_domain: contact.email } });
    handleResponse(response);
  }

  return (
    <>
      <AlertDialog
        title="Agregar a Lista de Supresión"
        btnPri={{
          label: "Sí, agregar",
          colorSchema: "primary",
          onClick: handleClick,
        }}
        button={<MenuItem>Agregar a Lista de Supresión</MenuItem>}
      />
    </>
  );
};
