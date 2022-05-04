import React, { FC } from "react";

import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="sm"
        boxShadow="sm"
        _checked={{
          bg: "secondary.600",
          color: "white",
          borderColor: "secondary.600",
        }}
        px={4}
        py={2}
        userSelect="none"
        fontWeight="medium"
        color="gray.700"
        transition="150ms"
        fontSize="sm"
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface WeekDaysSelectProps {
  defaultValue?: string;
  name: string;
  onChange?(name: string): void;
  items: string[];
}
export const WeekDaysSelect: FC<WeekDaysSelectProps> = ({
  defaultValue,
  onChange,
  name,
  items,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {items.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
