declare module "@continuapro/redux" {
  interface CreateCreditPlanArgs {
    credit_plan: {
      name: string;
      channel_id: number;
    };
  }

  interface DeleteCreditPlanArgs {
    id: number;
  }

  interface UpdateCreditPlanArgs {
    id: number;
    credit_plan: {
      name: string;
      channel_id: number;
    };
  }
}
