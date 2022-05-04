import { FormControl, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React, { FC, HTMLInputTypeAttribute, useEffect, useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface InputControlProps {
  label?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  rules?: RegisterOptions;
  defaultValue?: string | number;
  placeholder?: string;
  size?: string;
  textHelp?: string;
  variant?: "outline" | (string & {}) | "filled" | "flushed" | "unstyled";
  isDisabled?: boolean;
  onChange?: (newValue: string) => void;
  hiddenLabelError?: boolean;
  inputProps?: InputProps;
}

export const InputControlOld: FC<InputControlProps> = ({
  name,
  label,
  type,
  rules,
  defaultValue,
  placeholder,
  textHelp,
  variant,
  isDisabled,
  onChange,
  size,
  hiddenLabelError,
  inputProps,
}) => {
  const { register, formState } = useFormContext();
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
    <FormControl>
      <FormLabel color="gray.700" ml="0.5" fontSize="sm" mb="0.5" htmlFor={name} userSelect="none">
        {label}
      </FormLabel>
      <Input
        rounded="sm"
        _focus={{
          borderColor: "primary.500",
          ring: "1",
          ringColor: "primary.500",
        }}
        id={name}
        type={type}
        color="black"
        px="2.5"
        {...register(name, rules)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        variant={variant}
        isDisabled={isDisabled}
        size={size}
        onChange={(e) => onChange && onChange(e.target.value)}
        {...inputProps}
      />
      {textHelp && (
        <FormHelperText fontWeight="medium" color="gray.700">
          {textHelp}
        </FormHelperText>
      )}
      {!hiddenLabelError && formState.errors[name] && (
        <FormHelperText color="red.400" fontWeight="medium" mt="0.5">
          {errMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

InputControlOld.defaultProps = {
  type: "text",
};
