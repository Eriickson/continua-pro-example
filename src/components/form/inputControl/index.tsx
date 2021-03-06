import React, { FC } from "react";
import { InputProps as _InputProps } from "@chakra-ui/react";
import { FormControl, FormControlProps } from "../formControl";
import { Input, InputProps } from "../input";

interface InputControlProps extends InputProps<_InputProps> {
  formControl?: Omit<FormControlProps, "name">;
}

export const InputControl: FC<InputControlProps> = ({ formControl, ...inputProps }) => {
  return (
    <FormControl name={inputProps.name} {...formControl}>
      <Input {...inputProps} />
    </FormControl>
  );
};
