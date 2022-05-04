import React, { FC } from "react";
import { FormControl, FormControlProps } from "../formControl";
import { PasswordInput, PasswordInputProps } from "../passwordInput";

interface PasswordInputControlProps extends PasswordInputProps {
  formControl?: Omit<FormControlProps, "name">;
}

export const PasswordInputControl: FC<PasswordInputControlProps> = ({ formControl, ...passwordInputProps }) => {
  return (
    <FormControl name={passwordInputProps.name} {...formControl}>
      <PasswordInput {...passwordInputProps} />
    </FormControl>
  );
};
