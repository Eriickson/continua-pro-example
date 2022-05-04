import { Card, CardContainer, WizardStepProps } from "@/components";
import { useSelector } from "@/store";
import { Box, Button, HStack, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Step1Props extends WizardStepProps {}

export const Step1: FC<Step1Props> = ({ nextStep }) => {
  const { contactSegments } = useSelector(({ contactSegments }) => contactSegments);

  return (
    <Stack>
      <Card>
        <CardContainer>
          <Stack spacing="5">
            <Box>
              <Text fontSize="xl" color="secondary.500">
                Bienvenidos Nuevos Contactos
              </Text>
              <Text color="gray.700">
                Comience a interactuar con su audiencia enviando un correo electrónico automático (o una serie de
                correos electrónicos) tan pronto como se suscriban.
              </Text>
            </Box>
            <Box>
              <Text mb="2" fontSize="xl">
                Selecciona el Segmento
              </Text>
              <RadioGroup defaultValue="2">
                <Stack>
                  {contactSegments.map((contactSegment) => (
                    <Radio
                      size="lg"
                      key={contactSegment.id}
                      value={contactSegment.id.toString()}
                      colorScheme="blue"
                      defaultChecked
                    >
                      <Text fontSize="sm">{contactSegment.name}</Text>
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Box>
          </Stack>
        </CardContainer>
      </Card>
      <HStack justifyContent="flex-end">
        <Button colorScheme="primary" onClick={nextStep}>
          Continuar
        </Button>
      </HStack>
    </Stack>
  );
};
