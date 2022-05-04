import React, { FC } from "react";

import { Box } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";
import { motion } from "framer-motion";

import { InputProps } from "../input";

interface _SwitchProps {
  onChange(value: boolean): void;
  defaultChecked?: boolean;
}

export interface SwitchProps extends InputProps<_SwitchProps> {}

export const Switch: FC<SwitchProps> = ({ name, rules, inputProps }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={inputProps?.defaultChecked}
      rules={rules}
      render={({ field }) => (
        <Box
          onClick={() => {
            field.onChange(!field.value);
            inputProps?.onChange(!field.value);
          }}
          borderWidth="2px"
          cursor="pointer"
          borderColor="primary.400"
          w="10"
          p="0.5"
          bgColor="gray.100"
        >
          <Box w="max-content">
            <motion.div
              animate={{ x: field.value ? "100%" : 0, backgroundColor: "red" }}
              transition={{ duration: 0.1 }}
            >
              <Box p="2" h="full" bgColor={field.value ? "primary.500" : "gray.500"} w="full" />
            </motion.div>
          </Box>
        </Box>
      )}
    />
  );
};
