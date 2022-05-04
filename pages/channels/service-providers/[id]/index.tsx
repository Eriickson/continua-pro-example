import React from "react";

import { ChannelDetailsTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const ChannelsPage = () => {
  return (
    <div>
      <ChannelDetailsTemplate />
    </div>
  );
};

export default withAuth(ChannelsPage);
