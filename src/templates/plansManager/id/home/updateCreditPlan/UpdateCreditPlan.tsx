import React, { useMemo, useCallback } from "react";

import { useRouter } from "next/router";

import { useAction, useSelector } from "@/store";
import { useHandleResponse } from "@/hooks";

import { FormProvider } from "@/components";
import { UpdateCreditPlanForm } from "./UpdateCreditPlanForm";

export const UpdateCreditPlan = () => {
  const { updateCreditPlan } = useAction();

  const { channels } = useSelector(({ channels }) => channels);
  const { creditPlan } = useSelector(({ creditPlans }) => creditPlans);

  const { query } = useRouter();

  const handleResponse = useHandleResponse();

  const defaultChannel = useMemo(
    () =>
      channels
        .map(({ id, name }) => ({ label: name, value: id }))
        .find((channel) => channel.value === creditPlan?.channel_id),
    [creditPlan, channels]
  );

  const handleSubmit = useCallback(
    async (values: any) => {
      const { name, channel } = values;
      const response = await updateCreditPlan({
        id: Number(query.id),
        credit_plan: { name, channel_id: channel.value },
      });

      handleResponse(response);
    },
    [query]
  );

  return (
    <div>
      <FormProvider
        onSubmit={handleSubmit}
        id="update-credit-plan-form"
        defaultValues={{ channel: defaultChannel, name: creditPlan?.name }}
      >
        <UpdateCreditPlanForm />
      </FormProvider>
    </div>
  );
};
