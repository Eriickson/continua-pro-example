import { Divider } from "@chakra-ui/react";
import { Sender } from "@continuapro/entity";
import React, { FC, Fragment } from "react";
import { SenderDetailModal } from "./senderDetailModal/SenderDetailModal";

interface SenderListProps {
  senders: Sender[];
}

export const SendersList: FC<SenderListProps> = ({ senders }) => {
  return (
    <>
      {senders.map((sender) => (
        <Fragment key={sender.id}>
          <Divider />
          <SenderDetailModal sender={sender} />
        </Fragment>
      ))}
    </>
  );
};
