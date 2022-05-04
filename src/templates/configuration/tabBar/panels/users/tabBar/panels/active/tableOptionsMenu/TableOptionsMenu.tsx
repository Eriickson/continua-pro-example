import { Menu, MenuList, MenuItem, IconButton, MenuButton } from "@chakra-ui/react";
import { User } from "@continuapro/entity";
import React, { FC } from "react";
import { Edit, MoreVertical } from "react-feather";
import { CreateOrUpdateUser } from "../../../../createOrUpdateUser";
import { DeleteUser } from "./DeleteUser";

interface TableOptionsMenuProps {
  user: User;
}

export const TableOptionsMenu: FC<TableOptionsMenuProps> = ({ user }) => {
  return (
    <div>
      <Menu>
        <MenuButton
          size="sm"
          as={IconButton}
          icon={<MoreVertical size="1.25rem" />}
          variant="ghost"
          aria-label="eliminar usuario"
        />
        <MenuList>
          <DeleteUser userId={user.id} />
          <CreateOrUpdateUser
            type="UPDATE"
            button={
              <MenuItem color="orange.600" icon={<Edit size="1.25rem" />}>
                <b>Actualizar</b>
              </MenuItem>
            }
          />
        </MenuList>
      </Menu>
    </div>
  );
};
