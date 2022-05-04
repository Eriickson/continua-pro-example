import { useSelector } from "@/store";
import React, { FC } from "react";
import { FormControl, FormControlProps } from "../formControl";
import { InputMask, InputMaskProps } from "../inputMask";

interface InputPhoneNumberControlProps extends Omit<InputMaskProps, "mask"> {
  formControl?: Omit<FormControlProps, "name">;
}

export const InputPhoneNumberControl: FC<InputPhoneNumberControlProps> = ({ formControl, ...inputMaskProps }) => {
  const { numberPhoneMask } = useSelector(({ utilities }) => utilities.regexExpressions);
  console.log(inputMaskProps.rules);

  return (
    <FormControl name={inputMaskProps.name} {...formControl}>
      <InputMask
        mask={numberPhoneMask}
        rules={{
          required: true,
          ...inputMaskProps.rules,
          pattern: {
            value: new RegExp(
              numberPhoneMask
                .replace(/\d/g, "\\d")
                .replace(/\+/, "\\+")
                .replace(/ /g, "\\s")
                .replace(/\(/, "\\(")
                .replace(/\)/, "\\)")
            ),
            message: "Número telefónico incorrecto",
          },
        }}
        {...inputMaskProps}
      />
    </FormControl>
  );
};
