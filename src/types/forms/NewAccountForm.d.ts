import { AccountAddress } from "@continuapro/entity";
import { FormElement } from "@continuapro/form";

declare module "@continuapro/form" {
  interface NewAccountForm {
    name: string;
    subdomain: string;
    phone: string;
    organization_name: string;
    active: boolean;
    address_attributes: AccountAddress;
  }

  interface NewAccountFormProps extends FormElement<NewAccountForm> {}
}
