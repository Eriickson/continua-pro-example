import { Menu, MenuList, IconButton, MenuButton } from "@chakra-ui/react";
import React, { FC, Fragment } from "react";
import { Edit, MoreVertical } from "react-feather";

interface MenuItemOpts {
  id: string;
  Component: FC;
}

interface TableOptionsMenuProps {
  items: MenuItemOpts[];
}

export const TableOptionsMenu: FC<TableOptionsMenuProps> = ({ items }) => {
  return (
    <div>
      <Menu>
        <MenuButton
          size="sm"
          as={IconButton}
          icon={<MoreVertical size="1.25rem" />}
          variant="ghost"
          aria-label="table menu"
        />
        <MenuList>
          {items.map((item) => (
            <Fragment key={item.id}>
              <item.Component />
            </Fragment>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

/* <DeleteUser userId={user.id} /> */
/* <CreateOrUpdateUser
            type="UPDATE"
            defaultValues={user as any}
            button={
              <MenuItem color="orange.600" icon={<Edit size="1.25rem" />}>
                <b>Actualizar</b>
              </MenuItem>
            }
          /> */
