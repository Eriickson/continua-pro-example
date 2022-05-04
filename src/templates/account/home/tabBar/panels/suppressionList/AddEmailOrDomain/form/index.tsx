import React, { FC } from "react";

import { AddEmailOrDomainFormProps } from "@continuapro/form";

import { FormProvider, InputControl } from "@/components";

import { getFormId } from "@/utils";

export const AddEmailOrDomainForm: FC<AddEmailOrDomainFormProps> = ({ onSubmit }) => {
  return (
    <FormProvider id={getFormId(AddEmailOrDomainForm)} onSubmit={onSubmit}>
      <InputControl
        formControl={{ label: "Emails o Dominios", helperText: "Ejemplo: *@hotmail.com, john@*, john@hotmail.com" }}
        name="emailOrDomain"
        rules={{ required: true }}
      />
    </FormProvider>
  );
};
