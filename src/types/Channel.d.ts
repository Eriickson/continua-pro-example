declare module "@continuapro/redux" {
  interface Channel {
    id: number;
    name: string;
    service_providers: ServiceProvider[];
  }

  interface ServiceProvider {
    id: number;
    name: string;
    active: boolean;
    service_host: string;
    service_gateway_type: string;
  }
}
