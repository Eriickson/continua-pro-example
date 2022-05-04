declare module "@continuapro/entity" {
  interface PaymentGateway {
    id: number;
    name: string;
    logo_url: string;
    settings: PaymentGatewaySettings[];
  }

  interface PaymentGatewaySettings {
    id: number;
    name: string;
    key: string;
    value: string;
  }
}
