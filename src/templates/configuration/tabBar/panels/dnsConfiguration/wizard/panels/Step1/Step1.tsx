import React, { FC } from "react";

import { Button, Flex } from "@chakra-ui/react";

import { FormProvider } from "@/components";
import { useAction, useSelector } from "@/store";

import { Card, CardContainer, InputControl, WizardStepProps } from "@/components";

interface Step1Props extends WizardStepProps {}

export const Step1: FC<Step1Props> = ({ nextStep }) => {
  const { validateDomain } = useAction();
  const { isLoading } = useSelector(({ dnsSettings }) => dnsSettings.validateDomain);
  async function onSubmit(values: { domain: string }) {
    const { domain } = values;
    // TODO: Corregir para que se pueda detectar que la funcion es async
    await validateDomain({ dns_setting: { domain } });
    nextStep();
  }

  return (
    <Card>
      <CardContainer>
        <FormProvider id="step1-form" onSubmit={onSubmit}>
          <Flex maxW="xl" alignItems="center">
            <InputControl
              name="domain"
              formControl={{
                label: "Dominio",
                helperText: "Ingresa solo el nombre de tu dominio (sin http:// o www.)",
              }}
              // label=""
              rules={{ required: true }}
            />
            <Button
              _focus={{}}
              colorScheme="primary"
              ml="2"
              type="submit"
              isLoading={isLoading}
              loadingText="Validando..."
            >
              Validar
            </Button>
          </Flex>
        </FormProvider>
      </CardContainer>
    </Card>
  );
};
