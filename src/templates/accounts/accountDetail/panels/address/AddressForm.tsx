import { FormActions, FormProvider, InputControl } from "@/components";
import { useSelector } from "@/store";
import { HStack, Stack } from "@chakra-ui/react";
import React, { FC, useState } from "react";

interface AddressFormProps {
  onSubmit: (values: any, cb: () => void) => void;
}

export const AddressForm: FC<AddressFormProps> = ({ onSubmit }) => {
  const { account } = useSelector(({ accounts }) => accounts);
  const [isEditting, setIsEditting] = useState(false);

  return (
    <FormProvider
      id="address-account-form"
      onSubmit={(values) => onSubmit(values, () => setIsEditting(false))}
      defaultValues={account?.address}
    >
      <Stack>
        <HStack>
          <Stack flex="1">
            <InputControl name="street" formControl={{ label: "Calle" }} inputProps={{ isDisabled: !isEditting }} />
            <InputControl
              name="outdoor_number"
              inputProps={{ type: "number", isDisabled: !isEditting }}
              formControl={{ label: "outdoor number" }}
            />
            <InputControl
              name="interior_number"
              inputProps={{ type: "number", isDisabled: !isEditting }}
              formControl={{ label: "Número del interior" }}
            />
          </Stack>
          <Stack flex="1">
            <InputControl
              name="zip_code"
              inputProps={{ type: "number", isDisabled: !isEditting }}
              formControl={{ label: "Código Zip" }}
            />

            <InputControl
              name="municipality"
              formControl={{ label: "Municipio" }}
              inputProps={{ isDisabled: !isEditting }}
            />
            <InputControl name="state" formControl={{ label: "Estado" }} inputProps={{ isDisabled: !isEditting }} />
          </Stack>
        </HStack>
        <FormActions formTitle="address-account-form" isDisabled={!isEditting} setDisabled={setIsEditting} />
      </Stack>
    </FormProvider>
  );
};
