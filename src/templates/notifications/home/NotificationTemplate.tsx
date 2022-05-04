import React from "react";
import { Stack } from "@chakra-ui/react";

import { MainContainer } from "@/components";

import { NotificationsHeader } from "./NotificationsHeader";
import { NotificationList } from "./NotificationList";

export const NotificationTemplate = () => {
  return (
    <MainContainer>
      <Stack>
        <NotificationsHeader />
        <NotificationList />
      </Stack>
    </MainContainer>
  );
};
