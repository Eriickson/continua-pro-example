import React from "react";
import { useAction, useSelector } from "@/store";
import { Card, CardContainer, Switch } from "@/components";
import { Box, Heading, HStack, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { FormProvider } from "@/providers";
import { useHandleResponse } from "@/hooks";

export const NotificationSections = () => {
  const { updateNotificationSetting } = useAction();
  const { notificationSettings } = useSelector(({ notificationSettings }) => notificationSettings);

  const handleResponse = useHandleResponse();

  async function handleChange({ active, id }: { active: boolean; id: number }) {
    const response = await updateNotificationSetting({ id, notification_setting: { active } });
    handleResponse(response);
  }

  return (
    <div>
      <VStack alignItems="stretch">
        {notificationSettings.map((section) => (
          <Card key={section.title}>
            <CardContainer>
              <Stack>
                <Box>
                  <Heading fontSize="xl">Notificaciones Automáticas</Heading>
                  <Text color="gray.700">{section.title}</Text>
                </Box>
                <FormProvider id="update-notification-form" onSubmit={() => console.log("")}>
                  <List spacing={3}>
                    {section.notifications.map((notification) => (
                      <ListItem key={notification.id}>
                        <HStack justifyContent="space-between" w="lg">
                          <Text>{notification.name}</Text>
                          <Switch
                            inputProps={{
                              onChange: (active) => handleChange({ active, id: notification.id }),
                              defaultChecked: notification.active,
                            }}
                            name={notification.key}
                          />
                        </HStack>
                      </ListItem>
                    ))}
                  </List>
                </FormProvider>
              </Stack>
            </CardContainer>
          </Card>
        ))}
      </VStack>
    </div>
  );
};
