import {
  Box,
  Radio,
  Stack,
  RadioGroup as _RadioGroup,
  FormLabel,
} from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import { Controller, useFormContext } from "react-hook-form";

type RadioGroupItem = ReactElement | string;

interface RadioGroupProps {
  name: string;
  defaultValue?: number | string;
  label?: string;
  items: {
    label: RadioGroupItem;
    value: number | string;
  }[];
  direction?: "row" | "column";
}

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  items,
  label,
  defaultValue,
  direction = "row",
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Box>
          <FormLabel
            height="max-content"
            color="gray.700"
            ml="0.5"
            fontSize="sm"
            mb="1"
            htmlFor={name}
            userSelect="none"
          >
            {label}
            <_RadioGroup
              mt="1"
              h="10"
              defaultValue={defaultValue}
              height="max-content"
              {...field}
            >
              <Stack height="max-content" spacing={4} direction={direction}>
                {items.map((item) => (
                  <Radio
                    height="max-content"
                    fontSize="sm"
                    value={item.value}
                    key={item.value}
                  >
                    {item.label}
                  </Radio>
                ))}
              </Stack>
            </_RadioGroup>
          </FormLabel>
        </Box>
      )}
    />
  );
};
