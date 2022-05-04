import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface CreateOrUpdateChannelServiceProviderFormValues {
    name: string;
    host: string;
    serviceGatewayType: string;
    channel: Option;
  }

  interface CreateOrUpdateChannelServiceProviderFormProps
    extends FormElement<CreateOrUpdateChannelServiceProviderFormValues> {}
}
