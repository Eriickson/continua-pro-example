import { CampaignTemplate } from "@continuapro/entity";
import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface NewCampaignTemplateFormValues extends Omit<CampaignTemplate, "id"> {}

  interface NewCampaignTemplateFormProps extends FormElement<NewCampaignTemplateFormValues> {}
}
