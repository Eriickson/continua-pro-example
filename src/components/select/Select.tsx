import React, { FC, useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";

interface SelectProps {
  label?: string;
  options: { value: number | string; label: number | string }[];
  name: string;
  onChange?(value: any): void;
  isLoading?: boolean;
  rules?: RegisterOptions;
  placeholder?: string;
  defaultValue?: { value: number | string; label: number | string };
}

export const Select: FC<SelectProps> = ({
  options,
  name,
  onChange,
  isLoading,
  label,
  placeholder = "Seleccionar...",
  rules,
  defaultValue,
}) => {
  const { control, formState } = useFormContext();
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (formState.errors[name]) {
      const { type, message } = formState.errors[name] as {
        message: string;
        type: string;
      };
      const newErrMsg = message ? message : type === "required" ? "Campo requerido" : "Formato no válido";

      setErrMsg(newErrMsg);
    }
  }, [formState.errors]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl>
          {label && (
            <FormLabel color="gray.700" ml="0.5" fontSize="sm" mb="0.5" htmlFor={name} userSelect="none">
              {label}
            </FormLabel>
          )}
          <ReactSelect
            {...field}
            placeholder={placeholder}
            options={options}
            isLoading={isLoading}
            onChange={(newValue) => {
              field.onChange(newValue);
              onChange && onChange(newValue);
            }}
            styles={{ control: (styles) => ({ ...styles, minHeight: 40 }) }}
          />
          {formState.errors[name] && (
            <FormHelperText color="red.400" fontWeight="medium" mt="0.5">
              {errMsg}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
