import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../input";
import { InputNumberProps } from "../inputNumber";

export interface InputNumberControlProps extends InputNumberProps {
  inputNumberControlProps?: NumberFormatProps;
}

export const InputNumberControl: FC<InputNumberControlProps> = ({
  rules,
  name,
  inputProps,
  inputNumberControlProps,
}) => {
  const { control } = useFormContext();
  const { setValue, getValues } = useFormContext();
  const debounced = useDebouncedCallback((value: string) => setValue(name, value), 250);

  const InputComodin = (props: any) => {
    return <Input name={props.name} inputProps={{ ...props, ...inputProps }} />;
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
            <NumberFormat {...field} customInput={InputComodin} />
          </>
        );
      }}
    />
  );
};
