import React, { FC } from "react";

import {
  Menu as _Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";

import { MoreVertical } from "react-feather";

interface TableMenuProps {
  items: any;
  item: any;
}

export const TableMenu: FC<TableMenuProps> = (props) => {
  const { items, item: GlobalItem } = props;

  return (
    <_Menu>
      <MenuButton
        size="sm"
        as={IconButton}
        aria-label="Options"
        icon={<MoreVertical size="1rem" strokeWidth="2.5" />}
        variant="ghost"
        _focus={{}}
      />
      <MenuList>
        {items.map((item: any, i: number) => {
          return <item.Component key={i} args={{ item: GlobalItem }} />;
        })}
      </MenuList>
    </_Menu>
  );
};
