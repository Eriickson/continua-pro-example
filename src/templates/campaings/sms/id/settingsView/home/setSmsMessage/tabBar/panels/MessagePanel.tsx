import React, { useState } from "react";
import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { FormProvider, InputTextArea } from "@/components";
import { useAction } from "@/store";
import { useRouter } from "next/router";
import { useHandleResponse } from "@/hooks";

const maxLength = 160;

export const MessagePanel = () => {
  const { createCampaignTemplate, updateCampaign } = useAction();
  const [messageLength, setMessageLength] = useState(0);

  const { query } = useRouter();

  const handleResponse = useHandleResponse();

  async function onSubmit(values: any) {
    const response: any = await createCampaignTemplate({
      campaign_template: { content: values.content },
      campaignType: "sms",
    });

    const responseUpdateCampaign = await updateCampaign({
      id: Number(query.id),
      campaign: { campaign_template_id: response.payload.data.data.id },
      campaignType: "sms",
    });

    handleResponse(responseUpdateCampaign);
  }

  return (
    <FormProvider id="create-new-template-form" onSubmit={onSubmit}>
      <Stack bgColor="white" p="3" spacing="2">
        <InputTextArea
          name="content"
          rules={{ required: true, maxLength }}
          inputProps={{ onChange: (e) => setMessageLength(e.target.value.length) }}
        />
        <Flex justifyContent="space-between">
          <Button colorScheme="secondary" variant="outline">
            Agregar Campo Personalizado
          </Button>
          <Box textAlign="right" lineHeight="initial">
            <Text color={messageLength > maxLength ? "red.500" : undefined} fontSize="sm">
              {messageLength} de {maxLength} caracteres ({maxLength} por SMS)
            </Text>
            <HStack spacing="3" fontSize="sm">
              <Text>Mensajes: 0</Text> <Text>Contactos: 0</Text> <Text>Costo Estimado: $0.00</Text>
            </HStack>
          </Box>
        </Flex>
      </Stack>
    </FormProvider>
  );
};
