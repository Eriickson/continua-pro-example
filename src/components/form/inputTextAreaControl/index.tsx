import React, { FC } from "react";
import { FormControl, FormControlProps } from "../formControl";
import { InputTextArea, InputTextAreaProps } from "../inputTextArea";

interface InputTextareaControlProps extends InputTextAreaProps {
  formControl?: Omit<FormControlProps, "name">;
}

export const InputTextareaControl: FC<InputTextareaControlProps> = ({ formControl, ...inputProps }) => {
  return (
    <FormControl name={inputProps.name} {...formControl}>
      <InputTextArea {...inputProps} />
    </FormControl>
  );
};
