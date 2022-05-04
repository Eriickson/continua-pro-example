import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface NewServiceProviderFormValues {
    name: string;
    serviceHost: string;
    serviceGatewayType: string;
    channelId;
  }

  interface NewServiceProviderFormProps extends FormElement<NewServiceProviderFormValues> {}
}
