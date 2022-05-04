declare module "@continuapro/entity" {
  interface Notification {
    id: number;
    key: string;
    name: string;
    description: string;
    active: boolean;
  }
  interface NotificationSchedule {
    id: number;
    start_day: number;
    end_day: number;
    start_time: string;
    end_time: string;
  }
}
