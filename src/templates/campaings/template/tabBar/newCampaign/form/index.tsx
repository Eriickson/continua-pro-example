import React, { FC } from "react";
import { NewCampaingFormProps } from "@continuapro/form";
import { FormProvider, InputControl } from "@/components";
import { Stack } from "@chakra-ui/react";
import { getFormId } from "@/utils";

export const NewCampaignForm: FC<NewCampaingFormProps> = ({ onSubmit }) => {
  return (
    <FormProvider onSubmit={onSubmit} id={getFormId(NewCampaignForm)}>
      <Stack>
        <InputControl formControl={{ label: "Nombre" }} rules={{ required: true }} name="name" />
        <InputControl formControl={{ label: "Descripción" }} rules={{ required: true }} name="description" />
      </Stack>
    </FormProvider>
  );
};
