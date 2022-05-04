import { FormElement } from "@continuapro/form";
declare module "@continuapro/form" {
  interface AddEmailOrDomainFormValues {
    emailOrDomain: string;
  }

  interface AddEmailOrDomainFormProps extends FormElement<AddEmailOrDomainFormValues> {}
}
