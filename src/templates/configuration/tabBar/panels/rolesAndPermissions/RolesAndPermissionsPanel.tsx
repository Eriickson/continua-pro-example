import React, { useEffect } from "react";

import { SimpleGrid } from "@chakra-ui/react";
import { useAction, useSelector } from "@/store";
import { RoleModal } from "./RoleModal";

export const RolesAndPermissionsPanel = () => {
  const { getRoles } = useAction();
  const { roles } = useSelector(({ roles }) => roles);

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <div>
      <SimpleGrid gap={2} columns={12}>
        {roles
          .filter((payload) => !["SuperAdmin", "Agente"].includes(payload.name))
          .map((role) => (
            <RoleModal key={role.id} role={role} />
          ))}
      </SimpleGrid>
    </div>
  );
};
