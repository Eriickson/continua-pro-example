import { CreateOrUpdate } from "../CreateOrUpdate";

declare module "@continuapro/form" {
  interface FormElement<FormType, DefaultValues = {}> {
    onSubmit(values: FormType): void;
    defaultValues?: DefaultValues;
    type?: CreateOrUpdate;
  }

  type CreateOrUpdate = "CREATE" | "UPDATE";
}
