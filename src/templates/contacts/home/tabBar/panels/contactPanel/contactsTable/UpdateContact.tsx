import React, { FC } from "react";
import { MenuItem } from "@chakra-ui/react";
import { Contact } from "@continuapro/entity";
import { CreateOrUpdateContactModal } from "../createOrUpdateContactModal/CreateOrUpdateContactModal";

interface UpdateContactProps {
  item: Contact;
}

export const UpdateContact: FC<UpdateContactProps> = ({ item }) => {
  return (
    <>
      <CreateOrUpdateContactModal type="UPDATE" defaultValues={item} button={<MenuItem> Actualizar</MenuItem>} />
    </>
  );
};
