declare module "@continuapro/entity" {
  export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    segment: number;
    contact_since: Date;
    time_being_contact: string;
    custom_fields: CustomFields[];
  }

  interface CustomFields {
    id: number;
    name: string;
    value: string | number | null;
    data_type: string;
  }
}
