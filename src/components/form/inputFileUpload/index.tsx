import React, { FC, useEffect, useRef, useState } from "react";
import { Icon, InputGroup, InputLeftElement, InputProps as _InputProps } from "@chakra-ui/react";
import { Input, InputProps } from "../input";

import { Controller, useFormContext } from "react-hook-form";
import { File } from "react-feather";

export interface InputFileUploadProps
  extends InputProps<Omit<_InputProps, "onChange"> & { onChange?(files: File[]): void }> {
  multiple?: boolean;
}

export const InputFileUpload: FC<InputFileUploadProps> = ({ name, rules, inputProps, multiple }) => {
  const { onChange, ..._inputProps } = inputProps || {};
  const inputRef = useRef<any>(null);
  const [label, setLabel] = useState("");
  const { getValues } = useFormContext();

  useEffect(() => {
    setLabel(typeof getValues(name) === "string" ? getValues(name) : null);
  }, [getValues(name)]);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={File} />
      </InputLeftElement>
      <Controller
        name={name}
        rules={rules}
        render={({ field }) => (
          <>
            <input
              multiple={multiple}
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                const label = multiple
                  ? `${files.length} archivo${files.length > 1 ? "s" : ""} seleccionado${files.length > 1 ? "s" : ""}`
                  : files[0].name;
                field.onChange(files);
                onChange?.(files as any);
                setLabel(label);
              }}
              ref={inputRef}
              type="file"
              style={{ display: "none" }}
            />
            <Input
              inputProps={{
                pl: "8",
                isReadOnly: true,
                _focus: { borderWidth: "2px", borderColor: "primary.500" },
                placeholder: "Selecciona un archivo...",
                cursor: "pointer",
                onClick: () => inputRef.current.click(),
                onBlur: field.onBlur,
                value: label,
                ..._inputProps,
              }}
              name={`${field.name}-file`}
            />
          </>
        )}
      />
    </InputGroup>
  );
};
