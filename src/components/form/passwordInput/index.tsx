import { IconButton, InputGroup, InputRightElement, InputProps as _InputProps } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { Input, InputProps } from "../input";

export interface PasswordInputProps extends InputProps<_InputProps> {}

export const PasswordInput: FC<PasswordInputProps> = ({ name, rules, inputProps }) => {
  const [show, setShow] = useState(false);

  return (
    <InputGroup size="md">
      <Input
        name={name}
        rules={rules}
        inputProps={{ pr: "10", type: show ? "text" : "password", autoComplete: "off", ...inputProps }}
      />
      <InputRightElement>
        <IconButton
          colorScheme="secondary"
          variant="ghost"
          _focus={{}}
          icon={show ? <EyeOff size="1.25rem" /> : <Eye size="1.25rem" />}
          aria-label={`${show ? "Hide" : "Show"} password`}
          size="sm"
          onClick={() => setShow(!show)}
        />
      </InputRightElement>
    </InputGroup>
  );
};
