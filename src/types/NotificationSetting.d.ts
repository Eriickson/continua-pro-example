declare module "@continuapro/entity" {
  interface NotificationSettingSection {
    title: string;
    notifications: NotificationSetting[];
  }

  interface NotificationSetting {
    id: number;
    key: string;
    name: string;
    description: string;
    active: boolean;
  }
}
