import React from "react";

import { NextPage } from "next";

import { chakra, Box, Text, VStack } from "@chakra-ui/react";

import { useHandleResponse, useToast } from "@/hooks";
import { useAction } from "@/store";
import { ContiunaProIsotype } from "@/assets";

import { PasswordResetForm } from "./PasswordResetForm";
import { useRouter } from "next/router";
import { SEO } from "@/components";
import Link from "next/link";

export const PasswordResetPage: NextPage = () => {
  const { resetPassword } = useAction();
  const { query, push } = useRouter();
  const { showToast } = useToast();
  const handleResponse = useHandleResponse();

  async function handlerSubmit(values: { password: string; password_confirmation: string }) {
    const { password, password_confirmation } = values;

    if (password.length < 8) {
      showToast({
        title: "La contraseña es demasiado corta",
        description: "La contraseña debe tener al menos 8 caracteres",
        status: "warning",
      });
      return;
    }

    if (password !== password_confirmation) {
      // Show toast the password confirmation does not match
      showToast({
        title: "Las contraseñas no coinciden",
        description:
          "Las contraseñas no coinciden entre si por favor verifica tu nueva contraseña e intenta nuevamente.",
        status: "warning",
      });
      return;
    }

    const response: any = await resetPassword({
      user: { password, password_confirmation },
      query: { token: String(query.token) },
    });
    handleResponse(response);
    response.payload.status === 200 && push("/login");
  }

  return (
    <>
      <SEO title="Restablecer contraseña" />
      <VStack textAlign="center" spacing="8" w="100vw" h="100vh" justifyContent="center">
        <Box>
          <Box mb="2" w="max-content" mx="auto">
            <ContiunaProIsotype />
          </Box>
          <Text fontSize="2xl" fontWeight="semibold" color="secondary.500">
            Restablece tu contraseña
          </Text>
          <Text maxW="sm" fontSize="sm">
            Ingresa tu nueva contraseña y continuar con el proceso de recuperación de contraseña de tu cuenta de usuario
          </Text>
        </Box>
        <PasswordResetForm onSubmit={handlerSubmit} />
        <Link href="/login" passHref>
          <chakra.a textDecor="underline">Iniciar sesión</chakra.a>
        </Link>
      </VStack>
    </>
  );
};
