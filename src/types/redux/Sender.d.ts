import { Sender } from "@continuapro/entity";

declare module "@continuapro/redux" {
  interface CreateSenderArgs {
    contact: Omit<Sender, "id">;
  }
  interface UpdateSenderArgs {
    id: number;
    contact: Omit<Partial<Sender>, "id">;
  }
}
