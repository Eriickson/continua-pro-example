import React, { FC } from "react";
import { CreateOrUpdateSegmentModal, CreateOrUpdateSegmentModalProps } from "./modal";

interface CreateOrUpdateSegmentProps extends CreateOrUpdateSegmentModalProps {}

export const CreateOrUpdateSegment: FC<CreateOrUpdateSegmentProps> = (props) => {
  return (
    <div>
      <CreateOrUpdateSegmentModal {...props} />
    </div>
  );
};
