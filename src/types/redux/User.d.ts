declare module "@continuapro/redux" {
  interface CreateUserArgs {
    user: {
      email: string;
      name: string;
      password: string;
      password_confirmation: string;
      role_id: number;
    };
  }
  interface UpdateUserArgs {
    id: number;
    user: {
      email: string;
      name: string;
      password?: string;
      password_confirmation?: string;
      role_id: number;
    };
  }
}
