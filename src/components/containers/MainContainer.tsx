import React, { FC, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { ContinuaProIcon } from "@/assets";

import { ProfileSession } from "../headers/ProfileSession";

export const MainContainer: FC = ({ children }) => {
  const routes = useRouter();
  const [navbarListItem] = useState([
    { label: "Email", pathname: "/campaigns/mailing", basePath: "/campaigns/mailing" },
    { label: "Mensajería", pathname: "/campaigns/sms", basePath: "/campaigns/sms" },
    { label: "Automatización", pathname: "/agency/automatization", basePath: "/agency/automatization" },
    { label: "Contactos", pathname: "/contacts", basePath: "/contacts" },
    { label: "Reportes", pathname: "/reports", basePath: "/reports" },
  ]);

  return (
    <Box minHeight="100vh" bgColor="gray.100">
      <Box bgColor="white" shadow="sm" py="3.5" px="10" mb="2">
        <Flex alignItems="center" justifyContent="space-between">
          <HStack spacing="10">
            <Box w="64">
              <ContinuaProIcon />
            </Box>
            <HStack spacing="6">
              {navbarListItem.map((item) => (
                <Box key={item.label}>
                  <Link href={item.pathname}>
                    <a>
                      <Text px="2" py="0.5" color={routes.pathname.includes(item.basePath) ? "black" : "gray.500"}>
                        <b>{item.label}</b>
                      </Text>
                    </a>
                  </Link>
                  {routes.pathname.includes(item.basePath) && (
                    <Box h="1" rounded="full" bgColor="secondary.500" w="full"></Box>
                  )}
                </Box>
              ))}
            </HStack>
          </HStack>
          <ProfileSession />
        </Flex>
      </Box>
      <Box>
        <Box px="10">{children}</Box>
      </Box>
    </Box>
  );
};
