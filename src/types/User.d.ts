declare module "@continuapro/entity" {
  interface User {
    id: number;
    name: string;
    email: string;
    user_type: string;
    password: string;
    passwordConfirmation?: string;
  }
}
