import { InputControl } from "@/components";
import { FormProvider } from "@/providers";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

const inputsFields = [
  {
    label: "Nombre",
    name: "name",
  },
  {
    label: "Correo Electrónico",
    name: "email",
  },
  {
    label: "Número telefónico",
    name: "phone",
  },
  {
    label: "Nombre de la compañía",
    name: "company_name",
  },
];

interface SignupFormProps {
  onSubmit(values: any): void;
}

export const SignupForm: FC<SignupFormProps> = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDir="column" alignItems="center">
        <Stack spacing={4} mb="8">
          {inputsFields.map((input, i) => (
            <Input
              key={i}
              rounded="md"
              size="lg"
              fontSize="md"
              _focus={{
                borderColor: "white",
                ring: 1,
                ringColor: "white",
              }}
              w="xs"
              placeholder={input.label}
              borderColor={"primary.200"}
              _placeholder={{ color: "primary.200" }}
              color={"white"}
              {...register(input.name, { required: true })}
            />
          ))}
        </Stack>
        <Button
          py="6"
          colorScheme={"secondary"}
          fontSize="sm"
          lineHeight="normal"
          textTransform="uppercase"
          rounded="full"
          px="8"
          type="submit"
          loadingText="Creando cuenta..."
        >
          Crear cuenta
        </Button>
      </Box>
    </form>
  );
};
