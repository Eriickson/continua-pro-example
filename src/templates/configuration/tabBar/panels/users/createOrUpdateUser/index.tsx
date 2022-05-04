import React, { FC } from "react";
import { CreateOrUpdateUserModal, CreateOrUpdateUserModalProps } from "./modal";

interface CreateOrUpdateUserProps extends CreateOrUpdateUserModalProps {}

export const CreateOrUpdateUser: FC<CreateOrUpdateUserProps> = (props) => {
  return <CreateOrUpdateUserModal {...props} />;
};
