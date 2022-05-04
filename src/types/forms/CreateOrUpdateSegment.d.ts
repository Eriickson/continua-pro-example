import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface CreateOrUpdateSegmentFormValues {
    name: string;
  }

  interface CreateOrUpdateSegmentFormProps
    extends FormElement<CreateOrUpdateSegmentFormValues, CreateOrUpdateSegmentFormValues> {}
}
