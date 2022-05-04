import React, { useEffect } from "react";

import { useAction, useSelector } from "@/store";
import { MainTable } from "src/components/mainTable/MainTable";
import { UpdateUser } from "./UpdateUser";
import { DeleteUser } from "./tableOptionsMenu/DeleteUser";

export const ActiveUsersTable = () => {
  const { getUsers } = useAction();
  const { users } = useSelector(({ users }) => users);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <MainTable
      optionMenu={{
        items: [
          { Component: (props) => <UpdateUser item={props.args.item} /> },
          { Component: (props) => <DeleteUser userId={props.args.item.id} /> },
        ],
      }}
      data={users}
      layout={{
        columns: [
          { label: "Nombre", path: "name" },
          { label: "Correo Electrónico", path: "email" },
          { label: "Permisos", path: "user_type" },
        ],
      }}
    />
  );
};
