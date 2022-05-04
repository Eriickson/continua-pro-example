import React, { FC } from "react";

import { SendTestCampaignFormProps } from "@continuapro/form";

import { FormProvider, InputControl } from "@/components";

import { getFormId } from "@/utils";

export const SendTestForm: FC<SendTestCampaignFormProps> = ({ onSubmit }) => {
  return (
    <FormProvider id={getFormId(SendTestForm)} onSubmit={onSubmit}>
      <InputControl formControl={{ label: "Destinatario" }} rules={{ required: true }} name="recipient" />
    </FormProvider>
  );
};
