import { FormActions, FormProvider, InputControl, InputPhoneNumberControl } from "@/components";
import { useMethods } from "@/hooks";
import { useSelector } from "@/store";
import { Stack } from "@chakra-ui/react";
import { Account } from "@continuapro/entity";
import React, { FC, useState } from "react";

interface InformationFormProps {
  onSubmit: (values: any, cb: () => void) => void;
}

export const InformationForm: FC<InformationFormProps> = ({ onSubmit }) => {
  const { account } = useSelector(({ accounts }) => accounts);
  const [isEditting, setIsEditting] = useState(false);
  const { methods, setMethods } = useMethods<Account>();

  return (
    <FormProvider
      id="information-account-form"
      onSubmit={(values) => onSubmit(values, () => setIsEditting(false))}
      setMethods={setMethods}
      defaultValues={
        {
          name: account?.name,
          organization_name: account?.organization_name,
          subdomain: account?.subdomain,
          phone: account?.phone,
        } as Account
      }
    >
      <Stack>
        <InputControl
          rules={{ required: true }}
          name="name"
          formControl={{ label: "Nombre" }}
          inputProps={{ isDisabled: !isEditting }}
        />
        <InputControl
          name="organization_name"
          formControl={{ label: "Nombre de la organización" }}
          inputProps={{ isDisabled: !isEditting }}
        />
        <InputControl
          rules={{ required: true }}
          name="subdomain"
          formControl={{ label: "Subdominio" }}
          inputProps={{ isDisabled: !isEditting }}
        />
        <InputPhoneNumberControl
          name="phone"
          formControl={{ label: "Teléfono" }}
          inputProps={{ isDisabled: !isEditting }}
        />
        <FormActions
          formTitle="information-account-form"
          isDisabled={!isEditting}
          setDisabled={() => {
            methods?.reset();
            setIsEditting(!isEditting);
          }}
          onResert={() => methods?.reset()}
        />
      </Stack>
    </FormProvider>
  );
};
