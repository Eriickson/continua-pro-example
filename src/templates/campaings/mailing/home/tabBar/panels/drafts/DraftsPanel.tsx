import { Card, CardContainer } from "@/components";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MoreHorizontal } from "react-feather";

export const DraftsPanel = () => {
  return (
    <VStack alignItems="stretch">
      <Card>
        <CardContainer>
          <Heading color="primary.500" size="md">
            24 Registros encontrados
          </Heading>
        </CardContainer>
      </Card>
      <Card>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <CardContainer key={item}>
            <Flex justifyContent="space-between">
              <HStack spacing={6} alignItems="center">
                <Avatar size="lg" rounded="sm" />
                <Box>
                  <Text fontWeight="medium" fontSize="lg" color="secondary.500">
                    Untitled Campaign
                  </Text>
                  <Text fontSize="sm" color="gray.800">
                    Yesterday at 11:45am
                  </Text>
                </Box>
              </HStack>
              <HStack>
                <Button
                  _focus={{}}
                  textDecor="underline"
                  colorScheme="gray"
                  variant="ghost"
                >
                  Draft
                </Button>
                <Button
                  _focus={{}}
                  textDecor="underline"
                  colorScheme="blue"
                  variant="ghost"
                >
                  Editar Email
                </Button>
                <Button
                  _focus={{}}
                  textDecor="underline"
                  colorScheme="red"
                  variant="ghost"
                >
                  Eliminar
                </Button>
                <IconButton
                  _focus={{}}
                  textDecor="underline"
                  colorScheme="gray"
                  variant="ghost"
                  aria-label=""
                  color="gray.500"
                >
                  <MoreHorizontal />
                </IconButton>
              </HStack>
            </Flex>
          </CardContainer>
        ))}
      </Card>
    </VStack>
  );
};
