import { ContinuaProInvertedLogo } from "@/assets";
import {
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useAction } from "@/store";
import { SignupForm } from "./SignupForm";

export const SignupTemplate = () => {
  const { signup } = useAction();
  return (
    <div>
      <SimpleGrid h="100vh" columns={12}>
        <GridItem
          display={["none", null, "block"]}
          colSpan={[12, null, null, 6]}
        >
          <Center h="full">
            <Box userSelect="none">
              <Heading
                mb="3"
                size="2xl"
                fontWeight="normal"
                color="secondary.500"
              >
                Regístrate
              </Heading>
              <Heading size="2xl" fontWeight="normal" color="primary.500">
                Plataforma Multicanal
              </Heading>
              <Img src="/cover-login.png" />
            </Box>
          </Center>
        </GridItem>
        <GridItem colSpan={[12, null, null, 6]} bgColor="primary.500">
          <Center h="full">
            <Box>
              <Box mb="10">
                <ContinuaProInvertedLogo />
              </Box>
              <SignupForm onSubmit={signup} />
              <Flex mt="10" justifyContent="center">
                <Text color="primary.100" mr="1">
                  Tienes una cuenta?
                </Text>
                <Link href="/login">
                  <a>
                    <Text color="white" textDecor="underline">
                      Haz click aquí
                    </Text>
                  </a>
                </Link>
              </Flex>
            </Box>
          </Center>
        </GridItem>
      </SimpleGrid>
    </div>
  );
};
