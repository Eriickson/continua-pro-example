import { Box } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputProps } from "../input";
import Select, { InputProps as _InputProps } from "react-select";
import { colors } from "src/themes/color";

/* TODO: El inputpros no puede ser any */
export interface InputSelectProps extends Omit<InputProps<any>, "inputProps"> {
  selectProps?: Partial<{ isLoading: boolean; isDisabled: boolean; onChange(values: Option): void }>;
  options: Option[];
}

export const InputSelect: FC<InputSelectProps> = ({ name, options, rules, selectProps }) => {
  const { control } = useFormContext();
  const { isLoading, isDisabled, onChange } = selectProps || {};
  const { getValues, setValue } = useFormContext();

  /* TODO: Find Default values */
  useEffect(() => {
    const isDefaultValue = ["number", "string"].includes(typeof getValues(name));

    if (isDefaultValue) {
      const finded = options.find((item) => item.value === getValues(name));
      finded && setValue(name, finded);
    }
  }, [getValues(name), options]);

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field }) => (
        <Box flex="1">
          <Select
            styles={{
              control: (styles, { isFocused, isDisabled }) => ({
                ...styles,
                borderRadius: "2px",
                height: "40px",
                borderColor: isFocused ? colors.primary[500] : isDisabled ? "#f4f6f8" : "#e4e8ee",
                "&:hover": { borderColor: isFocused ? colors.primary[500] : "#e4e8ee" },
                width: "100%",
                boxShadow: isFocused ? `0px 0px 0px 1px ${colors.primary[500]}` : "none",
                backgroundColor: "transparent",
              }),
              valueContainer: (styles) => ({ ...styles, borderColor: colors.primary[500] }),
              option: (styles, { isSelected }) => ({
                ...styles,
                fontWeight: "500",
                backgroundColor: isSelected ? colors.primary[500] : "transparent",
                transition: "100ms",
                "&:hover": {
                  backgroundColor: isSelected ? colors.primary[500] : colors.gray[100],
                  transition: "100ms",
                },
                cursor: "pointer",
              }),
              indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
              input: (styles) => ({ ...styles, color: "black" }),
              menu: (styles) => ({ ...styles, zIndex: "10", borderRadius: "2px" }),
              singleValue: (styles, { isDisabled }) => ({ ...styles, color: isDisabled ? "#b3b3b3" : "black" }),
              placeholder: (styles) => ({ ...styles, color: "#c3cbd3" }),
            }}
            placeholder="Seleccionar..."
            options={options}
            {...field}
            onChange={(value) => {
              field.onChange(value);
              onChange?.(value);
            }}
            isLoading={isLoading}
            noOptionsMessage={() => "No hay opciones"}
            isDisabled={isDisabled}
          />
        </Box>
      )}
    />
  );
};
