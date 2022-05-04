import React from "react";
import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { MoreVertical } from "react-feather";
import { DeletePlan } from "./DeletePlan";

export const MenuPlan = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<MoreVertical />}
        variant="outline"
      />
      <MenuList>
        <DeletePlan />
      </MenuList>
    </Menu>
  );
};
