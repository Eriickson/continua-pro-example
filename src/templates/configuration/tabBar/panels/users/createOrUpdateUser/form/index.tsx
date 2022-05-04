import React, { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { CreateOrUpdateUserFormProps, CreateOrUpdateUserFormValues } from "@continuapro/form";

import { FormProvider, InputControl, InputSelectControl, PasswordInputControl } from "@/components";
import { useAction, useSelector } from "@/store";
import { getFormId } from "@/utils";

export const CreateOrUpdateContactForm: FC<CreateOrUpdateUserFormProps> = ({ onSubmit, defaultValues, type }) => {
  const { getPermissions } = useAction();
  const { roles } = useSelector(({ roles }) => roles);
  const { email } = useSelector(({ utilities }) => utilities.regexExpressions);

  function handleSubmit(values: CreateOrUpdateUserFormValues, methods: any) {
    if (values.password !== values.passwordConfirmation) {
      methods.setFocus("passwordConfirmation");
      methods.setError("passwordConfirmation", { message: "Las contraseñas no coinciden", type: "validate" });
      return;
    }
    onSubmit(values);
  }

  return (
    <FormProvider
      id={getFormId(CreateOrUpdateContactForm)}
      onSubmit={handleSubmit}
      defaultValues={
        type === "UPDATE" && {
          name: defaultValues?.name,
          email: defaultValues?.email,
          role: defaultValues?.user_type
            ? roles.find((role) => role.name === defaultValues?.user_type)?.id
            : defaultValues.role.value,
        }
      }
    >
      <Stack>
        <InputControl
          name="name"
          formControl={{ label: "Nombre" }}
          rules={{ required: true }}
          inputProps={{ spellCheck: false }}
        />
        <InputSelectControl
          name="role"
          formControl={{ label: "Rol" }}
          options={roles.map((role) => ({ label: role.name, value: role.id }))}
          selectProps={{ onChange: ({ value }) => getPermissions({ roleId: Number(value) }) }}
          rules={{ required: true }}
        />
        <InputControl
          name="email"
          formControl={{ label: "Correo Electrónico" }}
          rules={{ required: true, pattern: { value: new RegExp(email), message: "Correo electrónico no válido" } }}
          inputProps={{ spellCheck: false }}
        />
        <PasswordInputControl
          name="password"
          formControl={{ label: "Contraseña" }}
          rules={{
            required: type === "CREATE",
            minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" },
          }}
        />
        <PasswordInputControl
          name="passwordConfirmation"
          formControl={{ label: "Confirmar Contraseña" }}
          rules={{ required: type === "CREATE" }}
        />
      </Stack>
    </FormProvider>
  );
};
