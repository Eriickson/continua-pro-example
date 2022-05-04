import React, { FC } from "react";

import { FormProvider, InputControl } from "@/components";
import { CreateOrUpdateSegmentFormProps } from "@continuapro/form";
import { getFormId } from "@/utils";

export const CreateOrUpdateSegmentForm: FC<CreateOrUpdateSegmentFormProps> = ({ onSubmit, defaultValues }) => {
  return (
    <FormProvider id={getFormId(CreateOrUpdateSegmentForm)} onSubmit={onSubmit} defaultValues={defaultValues}>
      <InputControl formControl={{ label: "Nombre" }} name="name" rules={{ required: true }} />
    </FormProvider>
  );
};
