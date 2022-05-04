declare module "@continuapro/entity" {
  interface Profile {
    id: number;
    name: string;
    email: string;
    role_name: string;
    phone?: string;
    company_name?: string;
    address?: string;
    profile_picture_url?: string;
  }
}
