import React, { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { FormProvider, InputControl } from "@/components";
import { CreateEmailMarketingFormType } from "./CreateEmailMarketing";

interface CreateEmailMarketingFormProps {
  onSubmit(values: CreateEmailMarketingFormType): void;
}

export const CreateEmailMarketingForm: FC<CreateEmailMarketingFormProps> = ({ onSubmit }) => {
  return (
    <FormProvider onSubmit={onSubmit} id="create-email-marketing-form">
      <Stack>
        <InputControl formControl={{ label: "Nombre" }} rules={{ required: true }} name="name" />
        <InputControl formControl={{ label: "Descripción" }} rules={{ required: true }} name="description" />
      </Stack>
    </FormProvider>
  );
};
