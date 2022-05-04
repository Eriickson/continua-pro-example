import React, { FC } from "react";

import { Box, Flex, HStack, Stack, Text, Button, List, ListItem } from "@chakra-ui/react";

import { Card, CardContainer, WizardStepProps } from "@/components";
import { useAction, useSelector } from "@/store";
import { useHandleResponse } from "@/hooks";

interface Step3Props extends WizardStepProps {}

export const Step3: FC<Step3Props> = ({ goToStep }) => {
  const { updateDomains } = useAction();
  const handleResponse = useHandleResponse();

  const { data } = useSelector(({ dnsSettings }) => dnsSettings.updateInstructions);

  const { isLoading } = useSelector(({ dnsSettings }) => dnsSettings.updateDomains);

  async function handerFinish() {
    if (data) {
      const { bouncing_domain, forwarding_domain, tracking_domain } = data;
      const response: any = await updateDomains({
        dns_setting: { bouncing_domain, forwarding_domain, tracking_domain },
      });
      handleResponse(response);
      if (response.payload.status === 200) {
        goToStep(0);
      }
    }
  }

  return (
    <Stack>
      <Card>
        <CardContainer>
          <Box>
            <Text fontSize="lg" mb="2">
              Sus DNS están correctamente configurados. Para su registro, estos son los valores guardados en este
              momento:
            </Text>
            <Stack>
              <List>
                <ListItem>
                  <Text>
                    Enlace del dominio de rastreo: <b>{data?.tracking_domain}</b>
                  </Text>
                  <Text>
                    Enlace del dominio de reenvío: <b>{data?.forwarding_domain}</b>
                  </Text>
                  <Text>
                    Enlace del dominio de rebote: <b>{data?.bouncing_domain}</b>
                  </Text>
                </ListItem>
              </List>
            </Stack>
          </Box>
        </CardContainer>
      </Card>
      <Flex justifyContent="flex-end">
        <HStack>
          <Button colorScheme="secondary" onClick={() => goToStep(0)}>
            Actualizar entrada de DNS
          </Button>
          <Button
            colorScheme="primary"
            isLoading={isLoading}
            onClick={handerFinish}
            loadingText="Actualizando Dominios..."
          >
            Finalizar
          </Button>
        </HStack>
      </Flex>
    </Stack>
  );
};
