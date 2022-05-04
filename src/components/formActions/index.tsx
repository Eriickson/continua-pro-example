import { Button, Flex, HStack } from "@chakra-ui/react";
import React, { FC } from "react";

interface FormActionsProps {
  isDisabled: boolean;
  formTitle: string;
  setDisabled: (value: boolean) => void;
  onResert?(): void;
}

export const FormActions: FC<FormActionsProps> = ({ formTitle, isDisabled, setDisabled, onResert }) => {
  return (
    <Flex justifyContent="space-between">
      {isDisabled ? (
        <>
          <span></span>
          <Button colorScheme="secondary" _focus={{}} onClick={() => setDisabled(true)}>
            Editar Formulario
          </Button>
        </>
      ) : (
        <>
          <Button colorScheme="red" _focus={{}} variant="ghost" onClick={onResert}>
            Restablecer
          </Button>
          <HStack>
            <Button _focus={{}} onClick={() => setDisabled(false)}>
              Cancelar
            </Button>
            <Button type="submit" form={formTitle} _focus={{}} colorScheme="blue">
              Guardar Cambios
            </Button>
          </HStack>
        </>
      )}
    </Flex>
  );
};
