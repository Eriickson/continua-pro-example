import { Card, CardContainer } from "@/components";
import { useSelector } from "@/store";
import { Box, Divider, Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import moment from "moment";
import "moment/locale/es";

export const NotificationList = () => {
  const { notifications } = useSelector(({ notifications }) => notifications);

  return (
    <Card>
      <List>
        {notifications.map((notification, index) => (
          <Fragment key={notification.id}>
            <Divider display={index !== 0 ? "block" : "none"} />
            <CardContainer>
              <ListItem>
                <Box>
                  <Flex justifyContent="space-between">
                    <Box>
                      <Text lineHeight="5" fontSize="xl" color="primary.500" fontWeight="semibold">
                        {notification.source}
                      </Text>
                      <Text>
                        {moment(notification.received_at).locale("es-mx").format("LL")} -{" "}
                        {moment(notification.received_at).locale("es-mx").format("hh:mm a")}
                      </Text>
                    </Box>
                    {!notification.seen && (
                      <HStack alignItems="center">
                        <Text fontWeight="medium" color="gray.800">
                          No Leida
                        </Text>
                        <Box w="2.5" h="2.5" bgColor="red.600" rounded="full" />
                      </HStack>
                    )}
                  </Flex>
                  <Text fontWeight="medium" color="black">
                    {notification.headline}
                  </Text>
                </Box>
              </ListItem>
            </CardContainer>
          </Fragment>
        ))}
      </List>
    </Card>
  );
};
