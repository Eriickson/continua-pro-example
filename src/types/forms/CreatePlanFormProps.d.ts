import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface NewPlanFormValues {
    name: string;
    channel: Option;
  }

  interface NewPlanFormProps extends FormElement<NewPlanFormValues> {}
}
