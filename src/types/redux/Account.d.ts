import { NewAccountForm } from "@continuapro/form";

declare module "@continuapro/redux" {
  interface CreateAccountArgs {
    account: NewAccountForm;
  }
}
