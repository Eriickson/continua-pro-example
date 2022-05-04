declare module "@continuapro/entity" {
  export interface Sender {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: "pending_verification";
    username_initials: string;
  }
}
