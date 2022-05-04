import { Card, CardContainer } from "@/components";
import { useSelector } from "@/store";
import { Box, Flex, Text } from "@chakra-ui/react";

import React from "react";

export const NotificationsHeader = () => {
  const { notifications } = useSelector(({ notifications }) => notifications);

  return (
    <Card>
      <CardContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontWeight="semibold" lineHeight="4" fontSize="xl" color="secondary.500">
              Notificaciones
            </Text>
            <Text fontWeight="medium" color="gray.700">
              {notifications.length} Notificaciones pendientes
            </Text>
          </Box>
        </Flex>
      </CardContainer>
    </Card>
  );
};
