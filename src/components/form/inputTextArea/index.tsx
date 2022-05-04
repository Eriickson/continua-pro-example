import { Textarea, TextareaProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "../input";

export interface InputTextAreaProps extends InputProps<TextareaProps> {}

export const InputTextArea: FC<InputTextAreaProps> = ({ name, rules, inputProps }) => {
  const { register } = useFormContext();

  return (
    <div>
      <Textarea
        _focus={{
          borderColor: "primary.500",
          ring: "1",
          ringColor: "primary.500",
        }}
        color="black"
        px="2.5"
        rounded="sm"
        placeholder="Escribe algo..."
        {...register(name, rules)}
        {...inputProps}
      />
    </div>
  );
};
