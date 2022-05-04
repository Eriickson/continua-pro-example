/* eslint-disable react/no-children-prop */
import React, { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Flex, GridItem, Heading, Img, SimpleGrid, Text, VStack, Center, useToast } from "@chakra-ui/react";

import { SigninForm } from "./LoginForm";
import { ContinuaProIcon, ContinuaProInvertedLogo } from "../../assets";
import { useAction, useSelector } from "@/store";

export const LoginTemplate = () => {
  const toast = useToast();
  const { query } = useRouter();
  const [adminView, setAdminView] = useState<boolean | null>(null);
  const { err } = useSelector((store) => store.login.signin);

  useEffect(() => {
    Object.keys(query).length ? setAdminView(String(query.adminView) == "true") : setAdminView(false);
  }, [query]);

  useEffect(() => {
    err.hasError &&
      toast({
        ...err.shortDescription,
        variant: "left-accent",
        status: "error",
        position: "top-right",
      });
  }, [err]);

  if (adminView === null) {
    return null;
  }

  return (
    <>
      {adminView ? (
        <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
          <SignInToggleView adminView={adminView} />
        </Box>
      ) : (
        <SimpleGrid h="100vh" columns={12}>
          <GridItem display={["none", null, "block"]} colSpan={[12, null, null, 6]}>
            <Center h="full">
              <Box userSelect="none">
                <Heading mb="3" size="2xl" fontWeight="normal" color="secondary.500">
                  Inicio de Sesión
                </Heading>
                <Heading size="2xl" fontWeight="normal" color="primary.500">
                  Plataforma Multicanal
                </Heading>
                <Img src="cover-login.png" />
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={[12, null, null, 6]} bgColor="primary.500">
            <Center h="full">
              <Box>
                <SignInToggleView adminView={adminView} />
                <Flex>
                  <Text color="primary.100" mr="2">
                    Aún no tienes una cuenta?
                  </Text>
                  <Link href="/signup">
                    <a>
                      <Text color="white" textDecor="underline">
                        Crea tu cuenta gratuita aquí
                      </Text>
                    </a>
                  </Link>
                </Flex>
              </Box>
            </Center>
          </GridItem>
        </SimpleGrid>
      )}
    </>
  );
};

interface SignInToggleViewProps {
  adminView?: boolean;
}

const SignInToggleView: FC<SignInToggleViewProps> = ({ adminView }) => {
  const { signin } = useAction();
  const { query } = useRouter();
  const [returnUrl, setReturnUrl] = useState<string>();

  useEffect(() => {
    if (query?.return_url) {
      setReturnUrl(String(query.return_url));
    }
  }, [query]);

  return (
    <VStack spacing="16" mb="32">
      {adminView ? <ContinuaProIcon /> : <ContinuaProInvertedLogo />}

      <SigninForm
        adminView={adminView}
        onSubmit={async ({ email, password }) => signin({ email, password, returnUrl })}
      />
      <Link href="/password/recovery">
        <a>
          <Text color={adminView ? "primary.500" : "white"} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            Olvidaste tu contraseña?
          </Text>
        </a>
      </Link>
    </VStack>
  );
};
