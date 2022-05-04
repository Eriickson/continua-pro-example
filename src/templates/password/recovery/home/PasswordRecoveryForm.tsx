import { InputControl } from "@/components";
import { FormProvider } from "@/providers";
import { useSelector } from "@/store";
import { Box, Button, Stack } from "@chakra-ui/react";

import React, { FC } from "react";

interface PasswordRecoveryFormProps {
  onSubmit: (values: any) => void;
}

export const PasswordRecoveryForm: FC<PasswordRecoveryFormProps> = ({ onSubmit }) => {
  const { isLoading } = useSelector(({ resetPassword }) => resetPassword.sendPasswordResetEmail);

  return (
    <Box mx="auto" w="max-content">
      <FormProvider id="password-recovery-form" onSubmit={onSubmit}>
        <Stack>
          <Box>
            <InputControl
              formControl={{ label: "Correo electrónico", helperText: "Correo electrónico vinculado a tu cuenta." }}
              name="email"
              inputProps={{ width: "xs", isDisabled: isLoading, placeholder: "correo@correo.com" }}
              rules={{ required: true, pattern: { value: /^\S+@\S+\.\S+$/, message: "Ingrese un email valido" } }}
            />
          </Box>
          <Button
            type="submit"
            colorScheme="primary"
            isLoading={isLoading}
            loadingText="Enviando correo electrónico..."
          >
            Restabler Contraseña
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};
