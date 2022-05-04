import React, { useEffect } from "react";

import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import { Card, CardContainer, SectionTopTitle } from "@/components";
import { useAction, useSelector } from "@/store";
import { PersonalizedAttributesList } from "./PersonalizedAttributesList";
import { CreatePersonalizedAttribute } from "./CreatePersonalizedAttribute";

export const ContactsSettingsTemplate = () => {
  const { getPersonalizedAttributes } = useAction();
  const { personalizedAttributes } = useSelector(({ personalizedAttributes }) => personalizedAttributes);

  useEffect(() => {
    getPersonalizedAttributes();
  }, []);

  return (
    <>
      <Stack alignItems="stretch">
        <SectionTopTitle title="Configuración de Atributos" urlBack="/contacts" />
        <Card>
          <CardContainer>
            <Box textAlign="center">
              <Heading mb="5" fontWeight="normal" color="secondary.500">
                Administrar listas y atributos
              </Heading>
              <Text color="gray.700" maxW="lg" mx="auto">
                Puede, más adelante, utilizar estos atributos para personalizar sus correos electrónicos. También puede
                definir segmentos en función de estos atributos
              </Text>
            </Box>
          </CardContainer>
        </Card>
        <Card>
          <CardContainer>
            {personalizedAttributes && <PersonalizedAttributesList />}
            <CreatePersonalizedAttribute />
          </CardContainer>
        </Card>
      </Stack>
    </>
  );
};
