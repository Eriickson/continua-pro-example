import { Button, Heading, HStack, ModalBody, ModalFooter, ModalHeader, Radio, Stack, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useAction, useSelector } from "@/store";
import { Contact } from "@continuapro/entity";
import { CreateOrUpdateContactForm } from "./CreateOrUpdateContactForm";
import { useHandleResponse } from "@/hooks";
import { CreateOrUpdate } from "@continuapro/form";

interface NewContactProps {
  type: CreateOrUpdate;
  defaultValues?: Contact;
  onClose(): void;
}

export const NewContact: FC<NewContactProps> = ({ type, defaultValues, onClose }) => {
  const { createContact, updateContact } = useAction();
  const { isLoading: createContactIsLoading } = useSelector(({ contacts }) => contacts.createContact);
  const { isLoading: updateContactIsLoading } = useSelector(({ contacts }) => contacts.updateContact);

  const [saveAndOther, setSaveAndOther] = useState(false);
  const [methods, setMethods] = useState<any>();

  const [personalizedAttributesXCustomFields, setPersonalizedAttributesXCustomFields] = useState<any>(undefined);

  const handleResponse = useHandleResponse();

  async function onSubmit(contact: any) {
    let { name, email, phone, customFieldsAttributes } = contact;

    if (type === "CREATE") {
      // Create custom fields
      const custom_fields_attributes = Object.keys(customFieldsAttributes).map((item: any) => {
        const personalizedAttributesId = personalizedAttributesXCustomFields.find(
          (item2: any) => item2.customFieldId == item
        )?.personalizedAttributesId;

        return {
          personalized_attribute_id: personalizedAttributesId,
          value: customFieldsAttributes[item],
        };
      });

      // Request to create a new contact
      const response = await createContact({ contact: { name, email, phone, custom_fields_attributes } });

      // Handle response
      handleResponse(response, saveAndOther ? methods.reset() : onClose);
    } else if (type === "UPDATE") {
      const custom_fields_attributes = Object.keys(customFieldsAttributes)
        .filter((key) => customFieldsAttributes[key])
        .map((key) => ({ id: Number(key), value: customFieldsAttributes[key] }));
      console.log(custom_fields_attributes);

      // Request to update a contact
      const response: any = await updateContact({
        id: defaultValues?.id || 0,
        data: { name, email, phone, custom_fields_attributes },
      });
      handleResponse(response);
    }
  }

  return (
    <>
      <ModalHeader textAlign="center">
        <Heading fontWeight="normal" color="secondary.500">
          {type === "CREATE" ? "Agregar un contacto" : "Actualizar Contacto"}
        </Heading>
        <Text fontSize="sm" fontWeight="normal" color="gray.600">
          Si un nuevo contacto ha dado su permiso para enviarle correos electrónicos, complete su información de
          contacto a continuación y haga clic en Guardar.
        </Text>
      </ModalHeader>
      <ModalBody>
        <CreateOrUpdateContactForm
          setMethods={setMethods}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          setPersonalizedAttributesXCustomFields={setPersonalizedAttributesXCustomFields}
        />
      </ModalBody>

      <ModalFooter justifyContent="flex-start" pt="3">
        <Stack w="full">
          {type === "CREATE" && (
            <Radio alignItems="flex-start" mb="2" defaultChecked>
              <Text lineHeight="none" mt="-1" color="blue.800">
                Confirmo que tengo permiso para agregar este contacto
              </Text>
            </Radio>
          )}

          <HStack justifyContent="space-between">
            <span></span>
            {type === "CREATE" ? (
              <HStack>
                <Button
                  variant="outline"
                  colorScheme="primary"
                  type="submit"
                  form="create-or-update-form"
                  isLoading={createContactIsLoading || updateContactIsLoading}
                  loadingText="Guardando..."
                  onClick={() => setSaveAndOther(true)}
                >
                  Guardar y otro
                </Button>
                <Button
                  colorScheme="primary"
                  type="submit"
                  form="create-or-update-form"
                  isLoading={createContactIsLoading || updateContactIsLoading}
                  loadingText="Guardando..."
                  onClick={() => setSaveAndOther(false)}
                >
                  Guardar
                </Button>
              </HStack>
            ) : (
              <>
                <Button
                  colorScheme="primary"
                  type="submit"
                  form="create-or-update-form"
                  isLoading={createContactIsLoading || updateContactIsLoading}
                  loadingText="Guardando..."
                >
                  Guardar Cambios
                </Button>
              </>
            )}
          </HStack>
        </Stack>
      </ModalFooter>
    </>
  );
};
