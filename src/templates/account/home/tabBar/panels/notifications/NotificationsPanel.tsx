import { Card, CardContainer, Switch } from "@/components";
import { FormProvider } from "@/providers";
import { GridItem, SimpleGrid, Text, Box, List, ListItem, HStack } from "@chakra-ui/react";
import React from "react";
import { useAction, useSelector } from "@/store";
import { Schedule } from "./Schedule";
import { useHandleResponse } from "@/hooks";

export const NotificationsPanel = () => {
  const { updateNotificationPreference } = useAction();
  const { notificationPreferences } = useSelector(({ notificationPreferences }) => notificationPreferences);

  const handleResponse = useHandleResponse();

  async function handleUpdateNotification(id: number, active: boolean) {
    const response = await updateNotificationPreference({
      id: id,
      notification_preference: { active },
    });

    handleResponse(response);
  }

  return (
    <div>
      <Card>
        <CardContainer>
          <SimpleGrid gap={3} columns={12}>
            <Schedule />
            <GridItem colSpan={6}>
              <Box>
                <Box mb="5">
                  <Text lineHeight="none" fontWeight="medium">
                    Notificaciones
                  </Text>
                  <Text fontSize="sm" fontWeight="light" color="gray.800">
                    Para el responsable de la cuenta
                  </Text>
                </Box>
                <FormProvider id="update-notification-form" onSubmit={() => {}}>
                  <List spacing={3}>
                    {notificationPreferences.map((notificationPreference) => (
                      <ListItem key={notificationPreference.id}>
                        <HStack>
                          <Switch
                            inputProps={{
                              onChange: (active) => handleUpdateNotification(notificationPreference.id, active),
                              defaultChecked: notificationPreference.active,
                            }}
                            name={notificationPreference.name}
                          />
                          <Text>{notificationPreference.name}</Text>
                        </HStack>
                      </ListItem>
                    ))}
                  </List>
                </FormProvider>
              </Box>
            </GridItem>
          </SimpleGrid>
        </CardContainer>
      </Card>
    </div>
  );
};
