import { FormProvider, InputControl } from "@/components";
import { getFormId } from "@/utils";
import { Box, HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { useDebouncedCallback } from "use-debounce";

interface MailingEditorPreviewFormProps {
  defaultValues: any;
  onChange(newValue: { name: string; value: string }): void;
}

export const MailingEditorPreviewForm: FC<MailingEditorPreviewFormProps> = ({ onChange, defaultValues }) => {
  const debounced = useDebouncedCallback((value) => onChange(value), 1000);

  return (
    <FormProvider id="mailing-editor-preview-form" onSubmit={() => {}} defaultValues={defaultValues}>
      <HStack maxW="5xl">
        <Box flex="1">
          <InputControl
            name="name"
            formControl={{ label: "Nombre" }}
            inputProps={{ onChange: (e) => debounced({ name: e.target.name, value: e.target.value }) }}
          />
        </Box>
        <Box flex="2">
          <InputControl
            name="description"
            formControl={{ label: "Descripción" }}
            inputProps={{ onChange: (e) => debounced({ name: e.target.name, value: e.target.value }) }}
          />
        </Box>
      </HStack>
    </FormProvider>
  );
};
