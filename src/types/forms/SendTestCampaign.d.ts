import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface SendTestCampaignFormValues {
    recipient: string;
  }

  interface SendTestCampaignFormProps extends FormElement<SendTestCampaignFormValues> {}
}
