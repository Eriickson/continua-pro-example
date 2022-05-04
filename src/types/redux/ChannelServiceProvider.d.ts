import { ChannelServiceProvider } from "@continuapro/entity";

declare module "@continuapro/redux" {
  interface CreateChannelServiceProvider {
    channel_service_provider: Omit<ChannelServiceProvider, "id">;
  }
}
