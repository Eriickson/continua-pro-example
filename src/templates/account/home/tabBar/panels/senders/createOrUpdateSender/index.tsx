import React, { FC } from "react";
import { CreateOrUpdateSenderModal, CreateOrUpdateSenderModalProps } from "./modal";

interface CreateOrUpdateSenderProps extends CreateOrUpdateSenderModalProps {}

export const CreateOrUpdateSender: FC<CreateOrUpdateSenderProps> = ({ ...props }) => {
  return <CreateOrUpdateSenderModal {...props} />;
};
