import React, { FC, ReactElement, useEffect, useState } from "react";
import { Box, FormLabel, HStack } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { CheckboxIcon, CheckboxSelectedIcon } from "../../assets";

interface CheckboxProps {
  isDisabled?: boolean;
  defaultChecked?: boolean;
  name: string;
  label?: string | ReactElement;
  value?: string | number;
}

export const Checkbox: FC<CheckboxProps> = ({
  name,
  isDisabled,
  defaultChecked,
  label,
  value,
}) => {
  const [isSelected, setIsSelected] = useState(defaultChecked);
  const { control, setValue, getValues } = useFormContext();

  useEffect(() => {
    setValue(name, []);
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultChecked}
      render={({ field }) => (
        <HStack
          alignItems="flex-start"
          width="max-content"
          onClick={() => {
            let values: any[] = getValues(name);

            if (isDisabled) return;

            if (isSelected) {
              values = values.filter(
                (internalValue) => internalValue !== value
              );
              field.onChange(values);
            } else {
              values = [...values, value];
              field.onChange(values);
            }

            setIsSelected(!isSelected);
          }}
        >
          <Box
            w="max-content"
            cursor={isDisabled ? "not-allowed" : "pointer"}
            p="1"
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.5 }}
            opacity={0.7}
          >
            {isSelected ? <CheckboxSelectedIcon /> : <CheckboxIcon />}
          </Box>
          <FormLabel color="gray.800" mb="1" cursor="pointer" userSelect="none">
            {label}
          </FormLabel>
        </HStack>
      )}
    />
  );
};

Checkbox.defaultProps = {
  defaultChecked: false,
};
