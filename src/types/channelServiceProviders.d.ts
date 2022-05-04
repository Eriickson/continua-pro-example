declare module "@continuapro/entity" {
  interface ChannelServiceProvider {
    id: number;
    name: string;
    active: boolean;
    service_host: string;
    service_gateway_type: string;
    settings: ChannelServiceProvidersSetting[];
  }

  interface ChannelServiceProvidersSetting {
    id: number;
    label: string;
    key: string;
    value: string;
    data_type: string;
    input_type: string;
  }
}
