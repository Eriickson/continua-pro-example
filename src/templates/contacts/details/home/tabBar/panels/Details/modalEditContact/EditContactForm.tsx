import React, { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { InputControl } from "@/components";
import { FormProvider } from "@/providers";
import { Contact } from "@/contexts";

interface EditContactFormProps {
  contact: Contact;
  onSubmit(newValues: Contact): void;
}

export const EditContactForm: FC<EditContactFormProps> = ({ contact, onSubmit }) => {
  return (
    <FormProvider
      id="form-update-contact"
      onSubmit={onSubmit}
      defaultValues={{ email: contact.email, name: contact.name, phone: contact.phone, status: contact.status }}
    >
      <VStack spacing={5}>
        <InputControl name="email" formControl={{ label: "Correo electrónico" }} />
        <InputControl name="name" formControl={{ label: "Nombre" }} />
        <InputControl name="phone" formControl={{ label: "Teléfono" }} />
        <InputControl name="status" formControl={{ label: "Estado" }} />
      </VStack>
    </FormProvider>
  );
};
