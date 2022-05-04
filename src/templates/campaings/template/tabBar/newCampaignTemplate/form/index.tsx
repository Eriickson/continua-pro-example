import { FormProvider, InputControl, InputTextareaControl } from "@/components";
import { getFormId } from "@/utils";
import { Text } from "@chakra-ui/react";
import { NewCampaignTemplateFormProps } from "@continuapro/form";
import React, { FC, useState } from "react";

const maxCharacters = 160;

export const NewCampaignTemplateForm: FC<NewCampaignTemplateFormProps> = ({ onSubmit }) => {
  const [currentCharacterLength, setCurrentCharacterLength] = useState(0);

  return (
    <div>
      <FormProvider id={getFormId(NewCampaignTemplateForm)} onSubmit={onSubmit}>
        <InputControl rules={{ required: true }} name="name" formControl={{ label: "Nombre" }} />
        <InputControl name="description" formControl={{ label: "Descripción" }} />
        <InputTextareaControl
          name="content"
          formControl={{ label: "Contendio" }}
          inputProps={{
            minH: "36",
            onChange: (e) => setCurrentCharacterLength(e.target.value.length),
          }}
        />
        <Text fontWeight="medium" color={currentCharacterLength > maxCharacters ? "red.500" : "gray.700"} fontSize="sm">
          {currentCharacterLength} de {maxCharacters} caracteres (Máx. {maxCharacters} por SMS)
        </Text>
      </FormProvider>
    </div>
  );
};
