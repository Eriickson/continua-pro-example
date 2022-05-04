import { MenuItem } from "@chakra-ui/react";
import { User } from "@continuapro/entity";
import React, { FC } from "react";
import { Edit } from "react-feather";
import { CreateOrUpdateUser } from "../../../createOrUpdateUser";

interface UpdateUserProps {
  item: User;
}

export const UpdateUser: FC<UpdateUserProps> = ({ item }) => {
  return (
    <CreateOrUpdateUser
      type="UPDATE"
      defaultValues={item}
      button={
        <MenuItem color="blue.600" icon={<Edit size="1.25rem" />}>
          <b>Actualizar</b>
        </MenuItem>
      }
    />
  );
};
