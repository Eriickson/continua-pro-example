import React, { useEffect } from "react";

import { useAction } from "@/store";
import { withAuth } from "@/hocs";

import { NotificationTemplate } from "@/templates";

import "moment/locale/es";

const NotificationsPage = () => {
  const { getNotifications } = useAction();

  useEffect(() => {
    getNotifications();
  }, []);

  return <NotificationTemplate />;
};

export default withAuth(NotificationsPage);
