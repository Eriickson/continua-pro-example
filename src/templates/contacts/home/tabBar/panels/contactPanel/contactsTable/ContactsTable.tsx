import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { MainTable } from "@/components";
import { useSelector } from "@/store";
import { UpdateContact } from "./UpdateContact";
import { DeleteContact } from "./DeleteContact";
import { TableColumn } from "@/types";
import { AddToSuppressionList } from "./AddToSuppressionList";

export const ContactsTable = () => {
  const { contacts } = useSelector((store) => store.contacts);
  const [customFields, setCustomFields] = useState<TableColumn[]>([]);

  useEffect(() => {
    if (contacts.length > 0) {
      const customFields: TableColumn[] = contacts[0].custom_fields.map((field, i) => ({
        label: field.name,
        path: `custom_fields[${i}].value`,
      }));

      setCustomFields(customFields);
    }
  }, [contacts]);

  return (
    <Box>
      <MainTable
        layout={{
          columns: [
            { label: "Correo electrónico", path: "email" },
            { label: "Fecha añadida", path: "contact_since" },
            { label: "Estado", path: "status", type: "badge" },
            { label: "Teléfono", path: "phone" },
            { label: "Nombre", path: "name" },
            ...customFields,
          ],
        }}
        data={contacts}
        optionMenu={{
          items: [
            { Component: (props) => <AddToSuppressionList contact={props.args.item} /> },
            { Component: (props) => <UpdateContact item={props.args.item} /> },
            { Component: (props) => <DeleteContact id={props.args.item.id} /> },
          ],
        }}
      />
    </Box>
  );
};
