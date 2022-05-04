import { Setting } from "@continuapro/entity";

declare module "@continuapro/entity" {
  interface Account {
    id: number;
    name: string;
    subdomain: string;
    active: boolean;
    logo_url?: string;
    settings: any[];
    phone: number;
    organization_name?: string;
    address: null;
    notification_preferences: any[];
  }

  interface AccountAddress {
    street: string;
    outdoor_number: string;
    interior_number: string;
    zip_code: string;
    municipality: string;
    state: string;
  }

  interface AccountSettings extends Setting {}
}
