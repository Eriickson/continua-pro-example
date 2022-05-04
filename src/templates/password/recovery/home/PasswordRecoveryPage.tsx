import React, { useState } from "react";

import { NextPage } from "next";

import { chakra, Box, Text, VStack } from "@chakra-ui/react";

import { useToast } from "@/hooks";
import { useAction } from "@/store";
import { ContiunaProIsotype } from "@/assets";

import { PasswordRecoveryForm } from "./PasswordRecoveryForm";
import { useRouter } from "next/router";
import { SEO } from "@/components";
import Link from "next/link";

export const PasswordRecoveryPage: NextPage = () => {
  const { sendPasswordResetEmail } = useAction();
  const { push } = useRouter();

  const [emailSend, setEmailSend] = useState(false);

  const { showToast } = useToast();

  async function handlerSubmit(values: { email: string }) {
    const { email } = values;
    const response: any = await sendPasswordResetEmail({ user: { email } });

    if (response.payload.status === 200) {
      showToast({ title: response.payload.data.message, status: "success" });
      setEmailSend(true);
      push("/login");
    }
  }

  return (
    <>
      <SEO title="Enviar Correo de establecimiento de Contraseña" />
      <VStack textAlign="center" spacing="8" w="100vw" h="100vh" justifyContent="center">
        <Box>
          <Box mb="2" w="max-content" mx="auto">
            <ContiunaProIsotype />
          </Box>
          <Text fontSize="2xl" fontWeight="semibold" color="secondary.500">
            Olvidaste tu contraseña?
          </Text>
          <Text maxW="sm" fontSize="sm">
            Ingresa tu correo eletrónico y se te enviará un mensaje con las estrucciones para restabler tu contraseña
          </Text>
        </Box>
        <PasswordRecoveryForm onSubmit={handlerSubmit} />
        <Link passHref href="/login">
          <chakra.a textDecor="underline">Iniciar sesión</chakra.a>
        </Link>
      </VStack>
    </>
  );
};
