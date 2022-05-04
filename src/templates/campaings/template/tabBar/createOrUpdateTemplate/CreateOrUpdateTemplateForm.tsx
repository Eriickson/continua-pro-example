import React, { FC, useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { FormProvider } from "@/providers";

import { InputControl, TextareaControl } from "@/components";

const maxCharacters = 160;

interface CreateOrUpdateTemplateFormProps {
  defaultValues?: {
    title: string;
    text: string;
  };
  onSubmit: (values: any) => void;
}

export const CreateOrUpdateTemplateForm: FC<CreateOrUpdateTemplateFormProps> = ({ onSubmit, defaultValues }) => {
  const [currentCharacterLength, setCurrentCharacterLength] = useState(0);

  return (
    <div>
      <FormProvider id="update-template-form" onSubmit={onSubmit} defaultValues={{ name: defaultValues?.title }}>
        <Stack>
          <InputControl formControl={{ label: "Nombre" }} name="name" rules={{ required: true }} />
          <TextareaControl
            name="text"
            label="Texto"
            rules={{ required: true }}
            textareaProps={{
              defaultValue: defaultValues?.text,
              minH: "36",
              onChange: (e) => setCurrentCharacterLength(e.target.value.length),
            }}
          />
          <Text
            fontWeight="medium"
            color={currentCharacterLength > maxCharacters ? "red.500" : "gray.700"}
            fontSize="sm"
          >
            {currentCharacterLength} de {maxCharacters} caracteres (Máx. {maxCharacters} por SMS)
          </Text>
        </Stack>
      </FormProvider>
    </div>
  );
};
