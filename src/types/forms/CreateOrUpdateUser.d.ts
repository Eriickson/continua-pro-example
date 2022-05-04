import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface CreateOrUpdateUserFormValues {
    name: string;
    role: Option;
    email: string;
    password: string;
    passwordConfirmation: string;
  }

  interface CreateOrUpdateUserFormProps extends FormElement<CreateOrUpdateUserFormValues, any> {}
}
