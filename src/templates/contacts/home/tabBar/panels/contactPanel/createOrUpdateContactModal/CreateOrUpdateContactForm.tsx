import React, { FC, useEffect, useMemo } from "react";

import { GridItem, SimpleGrid } from "@chakra-ui/react";

import { FormProvider, InputControl, InputMaskControl } from "@/components";
import { useSelector } from "@/store";
import { Contact } from "@continuapro/entity";

interface CreateOrUpdateContactFormProps {
  defaultValues?: Contact;
  onSubmit(values: any): void;
  setMethods: any;
  setPersonalizedAttributesXCustomFields: any;
}

export const CreateOrUpdateContactForm: FC<CreateOrUpdateContactFormProps> = ({
  onSubmit,
  defaultValues,
  setMethods,
  setPersonalizedAttributesXCustomFields,
}) => {
  const { contacts } = useSelector(({ contacts }) => contacts);
  const { personalizedAttributes } = useSelector(({ personalizedAttributes }) => personalizedAttributes);

  const customFields = useMemo(
    () => contacts[0]?.custom_fields.map((field) => ({ label: field.name, name: field.id })),
    [contacts]
  );

  const defaultValuesInternal = useMemo(() => {
    if (defaultValues) {
      // @ts-ignore
      const values = {
        name: defaultValues.name,
        email: defaultValues.email,
        phone: defaultValues.phone,
        // Crear Función para obtener los valores de los custom fields
        customFieldsAttributes: defaultValues.custom_fields.reduce((a, v: any) => ({ ...a, [v.id]: v.value }), {}),
      };

      return values;
    }
  }, [defaultValues]);

  useEffect(() => {
    const result = personalizedAttributes.map((item) => {
      const customField = customFields.find((field) => field.label === item.name);
      return {
        personalizedAttributesId: item.id,
        customFieldId: customField?.name,
      };
    });
    setPersonalizedAttributesXCustomFields(result);
  }, [customFields, personalizedAttributes]);

  return (
    <FormProvider
      id="create-or-update-form"
      onSubmit={onSubmit}
      setMethods={setMethods}
      defaultValues={defaultValuesInternal}
    >
      <SimpleGrid rowGap={2} columnGap={5} columns={12}>
        <GridItem colSpan={6}>
          <InputControl formControl={{ label: "Nombre" }} name="name" rules={{ required: true }} />
        </GridItem>
        <GridItem colSpan={6}>
          <InputControl
            formControl={{ label: "Dirección de Correo electrónico" }}
            name="email"
            rules={{ required: true }}
          />
        </GridItem>
        <GridItem colSpan={6}>
          <InputMaskControl mask="+99 (999) 999-9999" formControl={{ label: "Teléfono" }} name="phone" />
        </GridItem>
        {customFields.map((item) => (
          <GridItem key={item.name} colSpan={6}>
            <InputControl formControl={{ label: item.label }} name={String(`customFieldsAttributes.${item.name}`)} />
          </GridItem>
        ))}
      </SimpleGrid>
    </FormProvider>
  );
};
