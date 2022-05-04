import { FormProvider, InputControl, InputPhoneNumberControl } from "@/components";
import { getFormId } from "@/utils";
import { HStack, Stack } from "@chakra-ui/react";
import { NewAccountFormProps } from "@continuapro/form";
import React, { FC } from "react";

export const NewAccountForm: FC<NewAccountFormProps> = ({ onSubmit }) => {
  return (
    <FormProvider id={getFormId(NewAccountForm)} onSubmit={onSubmit}>
      <HStack w="full">
        <Stack flex="1">
          <InputControl rules={{ required: true }} name="name" formControl={{ label: "Nombre" }} />
          <InputControl rules={{ required: true }} name="subdomain" formControl={{ label: "Subdominio" }} />
          <InputPhoneNumberControl name="phone" formControl={{ label: "Teléfono" }} />

          <InputControl
            rules={{ required: true }}
            name="organization_name"
            formControl={{ label: "Nombre de la organización" }}
          />
          <InputControl rules={{ required: true }} name="address_attributes.street" formControl={{ label: "Calle" }} />
        </Stack>
        <Stack flex="1">
          <InputControl
            rules={{ required: true }}
            name="address_attributes.outdoor_number"
            inputProps={{ type: "number" }}
            formControl={{ label: "outdoor number" }}
          />
          <InputControl
            rules={{ required: true }}
            name="address_attributes.interior_number"
            inputProps={{ type: "number" }}
            formControl={{ label: "Número del interior" }}
          />
          <InputControl
            rules={{ required: true }}
            name="address_attributes.zip_code"
            inputProps={{ type: "number" }}
            formControl={{ label: "Código Zip" }}
          />
          <InputControl
            rules={{ required: true }}
            name="address_attributes.municipality"
            formControl={{ label: "Municipio" }}
          />
          <InputControl
            rules={{ required: { message: "El estado es requerido", value: true } }}
            name="address_attributes.state"
            formControl={{ label: "Estado" }}
          />
        </Stack>
      </HStack>
    </FormProvider>
  );
};
