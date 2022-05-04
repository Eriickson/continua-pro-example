/* eslint-disable react/no-children-prop */
import React, { FC } from "react";

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { FormType, signInFormYupResolver } from "./signinFormSchema";
import { useForm } from "react-hook-form";
import { LockIcon, MailIcon } from "../../assets";
import { useSelector } from "@/store";

interface SigninFormProps {
  onSubmit(values: FormType): void;
  adminView?: boolean;
}

export const SigninForm: FC<SigninFormProps> = ({ onSubmit, adminView }) => {
  const { isLoading } = useSelector((store) => store.login.signin);
  const { handleSubmit, register } = useForm<FormType>({
    resolver: signInFormYupResolver,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <Box display="flex" flexDir="column" alignItems="center">
        <Stack spacing={4} mb="8">
          <InputGroup alignItems="center">
            <InputLeftElement
              children={
                <Box mt="2.5" ml={4}>
                  <MailIcon color={adminView ? undefined : "white"} />
                </Box>
              }
              pointerEvents="none"
            />
            <Input
              rounded="md"
              pl={12}
              size="lg"
              fontSize="md"
              _focus={{
                borderColor: adminView ? "primary.400" : "white",
                ring: 1,
                ringColor: adminView ? "primary.400" : "white",
              }}
              px={10}
              w="xs"
              placeholder="Correo electrónico"
              borderColor={adminView ? "gray.300" : "primary.200"}
              _placeholder={{ color: "primary.200" }}
              color={adminView ? "primary.500" : "white"}
              defaultValue="erickson.holguin@neuronalabs.com"
              isDisabled={isLoading}
              {...register("email" as never)}
            />
          </InputGroup>
          <InputGroup alignItems="center">
            <InputLeftElement
              children={
                <Box mt="2.5" ml={4}>
                  <LockIcon color={adminView ? undefined : "white"} />
                </Box>
              }
              pointerEvents="none"
            />
            <Input
              rounded="md"
              pl={12}
              size="lg"
              _focus={{
                borderColor: adminView ? "primary.400" : "white",
                ring: 1,
                ringColor: adminView ? "primary.400" : "white",
              }}
              px={10}
              w="xs"
              placeholder="Contraseña"
              fontSize="md"
              type="password"
              borderColor={adminView ? "gray.300" : "primary.200"}
              _placeholder={{ color: "primary.200" }}
              color={adminView ? "primary.500" : "white"}
              defaultValue="admin9010"
              isDisabled={isLoading}
              {...register("password" as never)}
            />
          </InputGroup>
        </Stack>
        <Button
          py="6"
          colorScheme={adminView ? "primary" : "secondary"}
          fontSize="sm"
          lineHeight="normal"
          textTransform="uppercase"
          rounded="full"
          px="8"
          type="submit"
          isLoading={isLoading}
          loadingText="Iniciando Sección..."
        >
          Iniciar Sesión
        </Button>
      </Box>
    </form>
  );
};
