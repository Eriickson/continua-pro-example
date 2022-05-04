import React, { useEffect } from "react";

import { Card, CardContainer, TemplateContainer } from "@/components";
import { useAction, useSelector } from "@/store";
import { useRouter } from "next/router";
import { ChannelDetailsForm } from "./ChannelDetailsForm";
import { Divider, Box, Text, chakra, HStack, Button } from "@chakra-ui/react";
import { useHandleResponse } from "@/hooks";
import { NewChannelServiceProviderSettingModal } from "./newChannelServiceProviderSetting/NewChannelServiceProviderSettingModal";

export const ChannelDetailsTemplate = () => {
  const { getChannelServiceProvider, updateChannelServiceProvider } = useAction();
  const { channelServiceProvider } = useSelector(({ channelServiceProviders }) => channelServiceProviders);

  const { query } = useRouter();

  const handleResponse = useHandleResponse();

  async function onChangeField({ id, value }: any) {
    const response = await updateChannelServiceProvider({
      id,
      channel_service_provider_setting: { value },
    });

    handleResponse(response);
  }

  useEffect(() => {
    if (query.id) {
      getChannelServiceProvider({ id: Number(query.id) });
    }
  }, [query]);

  return (
    <TemplateContainer title="Canales">
      <Card>
        <CardContainer>
          <HStack alignItems="flex-start" justifyContent="space-between">
            <Box>
              <Text fontSize="xl" fontWeight="semibold">
                {channelServiceProvider?.name}
              </Text>
              <Box>
                <Text fontSize="sm">
                  <chakra.span>Host de servicio:</chakra.span>{" "}
                  <chakra.code color="primary.500" bgColor="gray.200" px="1" rounded="sm">
                    {channelServiceProvider?.service_host}
                  </chakra.code>
                </Text>
                <Text fontSize="sm">
                  <chakra.span>Tipo de gateway de servicio:</chakra.span>{" "}
                  <chakra.code color="primary.500" bgColor="gray.200" px="1" rounded="sm">
                    {channelServiceProvider?.service_host}
                  </chakra.code>
                </Text>
              </Box>
            </Box>
            <NewChannelServiceProviderSettingModal />
          </HStack>
        </CardContainer>
        <Divider />
        <CardContainer>
          <ChannelDetailsForm onChangeField={onChangeField} />
        </CardContainer>
      </Card>
    </TemplateContainer>
  );
};
