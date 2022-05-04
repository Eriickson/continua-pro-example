import React, { useEffect } from "react";
import { useAction } from "@/store";
import { NotificationSections } from "./NotificationSections";

export const NotificationsPanel = () => {
  const { getNotificationSettings } = useAction();
  useEffect(() => {
    getNotificationSettings();
  }, []);

  return (
    <div>
      <NotificationSections />
    </div>
  );
};
