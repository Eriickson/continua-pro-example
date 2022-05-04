import React, { useEffect } from "react";

import { Box, Badge, Flex, Text, Button, CircularProgress } from "@chakra-ui/react";

import { Card, CardContainer } from "@/components";
import { AddUserIcon } from "@/assets";
import { useAction, useSelector } from "@/store";

import { SendersList } from "./SendersList";
import { CreateOrUpdateSender } from "./createOrUpdateSender";

export const SendersPanel = () => {
  const { getSenders } = useAction();
  const { senders } = useSelector(({ senders }) => senders);
  const { isLoading } = useSelector(({ senders }) => senders.getSenders);

  useEffect(() => {
    getSenders();
  }, []);

  return (
    <Card>
      <CardContainer>
        <Flex alignItems="center" justifyContent="space-between">
          <Box lineHeight="normal">
            <Text fontSize="xl" fontWeight="medium" color="black">
              Administre las direcciones de correo electrónico que pueden enviar desde esta cuenta
            </Text>
            <Flex alignItems="center">
              <Text mr="2">Senders actuales</Text>
              {isLoading ? (
                <CircularProgress size="1rem" isIndeterminate color="green.300" />
              ) : (
                <Badge colorScheme="secondary">{senders.length}</Badge>
              )}
            </Flex>
          </Box>
          <CreateOrUpdateSender
            type="CREATE"
            button={
              <Button fontSize="sm" colorScheme="primary" leftIcon={<AddUserIcon color="white" />}>
                Nuevo Sender
              </Button>
            }
          />
        </Flex>
      </CardContainer>
      <SendersList senders={senders} />
    </Card>
  );
};
