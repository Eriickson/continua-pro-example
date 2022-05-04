import React, { FC } from "react";
import { InputProps } from "../input";
import { FormControl, FormControlProps } from "../formControl";
import { Switch, SwitchProps } from "../switch";

interface SwitchControlProps extends InputProps<SwitchProps> {
  formControl?: Omit<FormControlProps, "name">;
}

export const SwitchControl: FC<SwitchControlProps> = ({ formControl, ...switchInputProps }) => {
  return (
    <FormControl name={switchInputProps.name} {...formControl}>
      {/* <Switch {...switchInputProps} /> */}
    </FormControl>
  );
};
