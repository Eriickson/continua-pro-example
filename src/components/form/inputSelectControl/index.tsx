import React, { FC } from "react";
import { FormControl, FormControlProps } from "../formControl";
import { InputSelect, InputSelectProps } from "../inputSelect";

interface InputSelectControlProps extends InputSelectProps {
  formControl?: Omit<FormControlProps, "name">;
}

export const InputSelectControl: FC<InputSelectControlProps> = ({ formControl, ...inputSelectProps }) => {
  return (
    <FormControl name={inputSelectProps.name} {...formControl}>
      <InputSelect {...inputSelectProps} {...inputSelectProps} />
    </FormControl>
  );
};
