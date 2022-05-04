import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface NewCampaingFormValues {
    name: string;
    description: string;
  }

  interface NewCampaingFormProps extends FormElement<NewCampaingFormValues> {}
}
