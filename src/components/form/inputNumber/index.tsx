import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import { Input, InputProps } from "../input";
import { InputProps as _InputProps } from "@chakra-ui/react";

export interface InputNumberProps extends InputProps<_InputProps> {
  inputNumberProps?: NumberFormatProps;
}

export const InputNumber: FC<InputNumberProps> = ({ rules, name, inputProps, inputNumberProps }) => {
  const { control } = useFormContext();

  const InputComodin = (props: any) => {
    return (
      <Input
        name={props.name}
        inputProps={{
          ...inputProps,
          ...props,
          onChange: (e) => {
            inputProps?.onChange?.(e);
            props.onChange?.(e);
          },
        }}
      />
    );
  };

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            {/*  @ts-ignore:next-line */}
            <NumberFormat {...field} {...inputNumberProps} customInput={InputComodin} />
          </>
        );
      }}
    />
  );
};
