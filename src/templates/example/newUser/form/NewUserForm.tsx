import React, { FC } from "react";

import { NewUserFormProps } from "@continuapro/form";

import { Stack } from "@chakra-ui/react";

import { FormProvider, InputControl, PasswordInputControl } from "@/components";

import { getFormId } from "@/utils";

export const NewUserForm: FC<NewUserFormProps> = ({ onSubmit }) => {
  return (
    <div>
      <FormProvider id={getFormId(NewUserForm)} onSubmit={onSubmit}>
        <Stack>
          <InputControl formControl={{ label: "Name" }} name="name" />
          <InputControl formControl={{ label: "Lastname" }} name="lastname" />
          <InputControl formControl={{ label: "Email" }} name="email" />
          <PasswordInputControl formControl={{ label: "Password" }} name="password" />
        </Stack>
      </FormProvider>
    </div>
  );
};
