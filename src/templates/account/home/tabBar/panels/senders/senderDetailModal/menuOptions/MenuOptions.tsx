import React, { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";

import { MoreVertical } from "react-feather";

import { DeleteSender } from "../../DeleteSender";
import { CreateOrUpdateSender } from "../../createOrUpdateSender";
import { Sender } from "@continuapro/entity";

interface MenuOptionsProps {
  sender: Sender;
}

export const MenuOptions: FC<MenuOptionsProps> = ({ sender }) => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<MoreVertical size="1.25rem" />} />
      <MenuList>
        <CreateOrUpdateSender
          defaultValues={sender}
          type="UPDATE"
          button={
            <MenuItem w="full" id="Hola">
              Editar
            </MenuItem>
          }
        />
        <DeleteSender id={sender.id} />
      </MenuList>
    </Menu>
  );
};
