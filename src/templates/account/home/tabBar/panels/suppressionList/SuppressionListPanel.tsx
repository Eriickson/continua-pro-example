import React, { useEffect } from "react";

import { Card, CardContainer } from "@/components";
import { Box, Badge, Flex, Text, VStack, CircularProgress } from "@chakra-ui/react";
import { useAction, useSelector } from "@/store";
import { AddEmailOrDomain } from "./AddEmailOrDomain";

import { SuppressionListTable } from "./SuppressionListTable";

export const SuppressionListPanel = () => {
  const { getSuppressionList } = useAction();
  const { suppressionList } = useSelector(({ suppressionList }) => suppressionList);
  const { isLoading } = useSelector(({ suppressionList }) => suppressionList.getSuppressionList);

  useEffect(() => {
    getSuppressionList();
  }, []);

  return (
    <VStack alignItems="stretch">
      <Card>
        <CardContainer>
          <Flex alignItems="center" justifyContent="space-between">
            <Box lineHeight="normal">
              <Text fontSize="xl" fontWeight="medium" color="black">
                Administre los correos electrónicos y dominios suprimidos que están asociados con esta cuenta
              </Text>
              <Flex alignItems="center">
                <Text mr="2">Dominios actuales</Text>
                {isLoading ? (
                  <CircularProgress size="1rem" isIndeterminate color="green.300" />
                ) : (
                  <Badge colorScheme="secondary">{suppressionList.length}</Badge>
                )}
              </Flex>
            </Box>
            <AddEmailOrDomain />
          </Flex>
        </CardContainer>
      </Card>
      <SuppressionListTable />
    </VStack>
  );
};
