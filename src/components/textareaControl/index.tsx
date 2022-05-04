import React, { FC } from "react";
import { FormControl, FormLabel, Textarea, TextareaProps } from "@chakra-ui/react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface TextareaControlProps {
  name: string;
  label?: string;
  rules?: RegisterOptions;
  textareaProps?: TextareaProps;
}

export const TextareaControl: FC<TextareaControlProps> = ({ name, label, rules, textareaProps }) => {
  const { register } = useFormContext();

  return (
    <FormControl>
      <FormLabel color="gray.700" ml="0.5" fontSize="sm" mb="0.5" htmlFor={name} userSelect="none">
        {label}
      </FormLabel>
      <Textarea
        _focus={{
          borderColor: "primary.500",
          ring: "1",
          ringColor: "primary.500",
        }}
        color="black"
        px="2.5"
        rounded="sm"
        {...register(name, rules)}
        {...textareaProps}
      />
    </FormControl>
  );
};
