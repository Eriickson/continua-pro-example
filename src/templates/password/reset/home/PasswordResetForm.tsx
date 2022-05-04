import { InputControl, PasswordInputControl } from "@/components";
import { FormProvider } from "@/providers";
import { useSelector } from "@/store";
import { Box, Button, Stack } from "@chakra-ui/react";

import React, { FC } from "react";

interface PasswordResetFormProps {
  onSubmit: (values: any) => void;
}

export const PasswordResetForm: FC<PasswordResetFormProps> = ({ onSubmit }) => {
  const { isLoading } = useSelector(({ resetPassword }) => resetPassword.resetPassword);

  return (
    <Box mx="auto" w="max-content">
      <FormProvider id="password-recovery-form" onSubmit={onSubmit}>
        <Stack>
          <PasswordInputControl
            formControl={{ label: "Nueva contraseña" }}
            rules={{ required: true }}
            name="password"
            inputProps={{ width: "xs", isDisabled: isLoading }}
          />
          <PasswordInputControl
            formControl={{ label: "Confirma tu nueva contraseña" }}
            name="password_confirmation"
            inputProps={{ width: "xs", isDisabled: isLoading }}
          />
          <Button type="submit" colorScheme="primary" isLoading={isLoading} loadingText="Cambiando contraseña...">
            Cambiar Contraseña
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};
