import React, { FC } from "react";

import { MenuItem } from "@chakra-ui/react";
import { CreateOrUpdateTemplate } from "../../createOrUpdateTemplate/CreateOrUpdateTemplate";

export const UpdateTemplate: FC<any> = ({ args }) => {
  return (
    <div>
      <CreateOrUpdateTemplate type="UPDATE" button={<MenuItem>Actualizar</MenuItem>} defaultValues={args.item} />
    </div>
  );
};
