import { FormControl, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import _InputMask from "react-input-mask";

interface InputMaskProps {
  name: string;
  rules?: RegisterOptions;
  placeholder?: string;
  mask?: string;
  label?: string;
  defaultValue?: string | number;
  textHelp?: string;
  inputProps?: InputProps;
}

export const InputMask: FC<InputMaskProps> = ({
  name,
  rules,
  placeholder,
  mask = "",
  defaultValue,
  label,
  textHelp,
  inputProps,
}) => {
  const { control } = useFormContext();

  return (
    <div>
      <FormControl>
        <FormLabel color="gray.700" ml="0.5" fontSize="sm" mb="0.5" htmlFor={name} userSelect="none">
          {label}
        </FormLabel>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field }) => (
            <>
              <_InputMask mask={mask} placeholder={placeholder} defaultValue={defaultValue} {...field}>
                {/*   @ts-ignore:next-line */}
                {(props: any) => (
                  <Input
                    _focus={{
                      borderColor: "primary.500",
                      ring: "1",
                      ringColor: "primary.500",
                    }}
                    px="2.5"
                    color="black"
                    rounded="sm"
                    {...inputProps}
                    {...props}
                  />
                )}
              </_InputMask>
              {textHelp && (
                <FormHelperText fontWeight="medium" color="gray.700">
                  {textHelp}
                </FormHelperText>
              )}
              {/* {formState.errors[name] && (
        <FormHelperText color="red.400" fontWeight="medium" mt="0.5">
          {errMsg}
        </FormHelperText>
      )} */}
            </>
          )}
        />
      </FormControl>
    </div>
  );
};
