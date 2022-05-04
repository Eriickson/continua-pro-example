import { FormElement } from "@continuapro/form";
import { FC } from "react";

declare module "@continuapro/form" {
  interface CreateOrSenderFormValues {
    name: string;
    email: string;
    phone: string;
  }

  type CreateOrSenderFormProps = FC<FormElement<CreateOrSenderFormValues>>;
}
