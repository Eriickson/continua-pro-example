import React, { FC } from "react";
import { FormControl, FormControlProps } from "../formControl";
import { InputMask, InputMaskProps } from "../inputMask";

interface InputMaskControlProps extends InputMaskProps {
  formControl?: Omit<FormControlProps, "name">;
}

export const InputMaskControl: FC<InputMaskControlProps> = ({ formControl, ...inputMaskProps }) => {
  return (
    <FormControl name={inputMaskProps.name} {...formControl}>
      <InputMask {...inputMaskProps} />
    </FormControl>
  );
};
