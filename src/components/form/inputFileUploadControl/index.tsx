import React, { FC } from "react";
import { FormControl, FormControlProps } from "../formControl";
import { InputFileUpload, InputFileUploadProps } from "../inputFileUpload";

interface InputFileUploadControlProps extends InputFileUploadProps {
  formControl?: Omit<FormControlProps, "name">;
}

export const InputFileUploadControl: FC<InputFileUploadControlProps> = ({ formControl, ...inputFileUpload }) => {
  return (
    <FormControl name={inputFileUpload.name} {...formControl}>
      <InputFileUpload {...inputFileUpload} />
    </FormControl>
  );
};
