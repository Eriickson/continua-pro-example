import { Td, Tr } from "@chakra-ui/react";
import { User } from "@continuapro/entity";
import React, { FC } from "react";
import { TableOptionsMenu } from "./tableOptionsMenu/TableOptionsMenu";

interface ActiveUsersTableRowProps {
  user: User;
}

export const ActiveUsersTableRow: FC<ActiveUsersTableRowProps> = ({ user }) => {
  return (
    <Tr key={user.id}>
      <Td py="2" color="gray.800" fontWeight="medium">
        {user.name}
      </Td>
      <Td py="2" color="gray.800" fontWeight="medium">
        {user.email}
      </Td>
      <Td py="2" color="gray.800" fontWeight="medium">
        {user.user_type}
      </Td>
      <Td py="2" cursor="pointer">
        <TableOptionsMenu user={user} />
      </Td>
    </Tr>
  );
};
