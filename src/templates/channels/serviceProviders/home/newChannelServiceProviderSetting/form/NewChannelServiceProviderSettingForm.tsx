import React, { FC } from "react";

import { NewChannelServiceProviderSettingFormValues } from "@continuapro/form";

import { Stack } from "@chakra-ui/react";

import { FormProvider, InputControl } from "@/components";

interface NewChannelServiceProviderSettingFormProps {
  onSubmit(values: NewChannelServiceProviderSettingFormValues): void;
}

export const NewChannelServiceProviderSettingForm: FC<NewChannelServiceProviderSettingFormProps> = ({ onSubmit }) => {
  return (
    <FormProvider id="new-channel-service-provider-setting-form" onSubmit={onSubmit}>
      <Stack>
        <InputControl rules={{ required: true }} name="key" formControl={{ label: "Key" }} />
        <InputControl rules={{ required: true }} name="value" formControl={{ label: "Valor" }} />
        <InputControl rules={{ required: true }} name="data_type" formControl={{ label: "Tipo de dato" }} />
      </Stack>
    </FormProvider>
  );
};
