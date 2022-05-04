import React from "react";

import { CreateOrSenderFormProps } from "@continuapro/form";
import { FormProvider, InputControl, InputPhoneNumberControl } from "@/components";
import { getFormId } from "@/utils";
import { Stack } from "@chakra-ui/react";
import { useSelector } from "@/store";

export const CreateOrUpdateSenderForm: CreateOrSenderFormProps = ({ onSubmit, defaultValues }) => {
  const { email } = useSelector(({ utilities }) => utilities.regexExpressions);

  return (
    <FormProvider onSubmit={onSubmit} id={getFormId(CreateOrUpdateSenderForm)} defaultValues={defaultValues}>
      <Stack>
        <InputControl formControl={{ label: "Nombre" }} rules={{ required: true }} name="name" />
        <InputControl
          formControl={{ label: "Dirección de Correo electrónico" }}
          rules={{ required: true, pattern: { value: new RegExp(email), message: "Email no válido" } }}
          name="email"
        />
        <InputPhoneNumberControl formControl={{ label: "Teléfono" }} rules={{ required: true }} name="phone" />
      </Stack>
    </FormProvider>
  );
};
