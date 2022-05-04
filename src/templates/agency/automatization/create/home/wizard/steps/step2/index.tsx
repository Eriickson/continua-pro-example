import { Card, CardContainer, InputControl, WizardStepProps } from "@/components";
import { FormProvider } from "@/providers";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { TextareaControl } from "src/components/textareaControl";

interface Step2Props extends WizardStepProps {}

export const Step2: FC<Step2Props> = ({ nextStep }) => {
  return (
    <div>
      <Card>
        <CardContainer>
          <Stack>
            <Box>
              <Text color="secondary.500" fontSize="xl">
                Configure sus detalles de automatización
              </Text>
              <Text fontSize="sm">
                Los detalles de automatización son privados y solo los verán las personas de esta cuenta
              </Text>
            </Box>
            <Box maxW="lg">
              <FormProvider
                id="step2"
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Stack>
                  <InputControl formControl={{ label: "Nombre de la automatización" }} name="name" />
                  <TextareaControl name="description" label="Descripción de la automatización" />
                </Stack>
              </FormProvider>
            </Box>
          </Stack>
        </CardContainer>
      </Card>
      <HStack justifyContent="flex-end">
        <Button colorScheme="primary" onClick={nextStep}>
          Continuar
        </Button>
      </HStack>
    </div>
  );
};
