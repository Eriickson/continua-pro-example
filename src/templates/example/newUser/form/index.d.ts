import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface NewUserFormValues {
    name: string;
    lastname: string;
    email: string;
    password: string;
  }

  interface NewUserFormProps extends FormElement<NewUserFormValues> {}
}
