import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { Check } from "react-feather";

interface CircleStepProps {
  label: string | number;
  title?: string;
  subtile?: string;
  isActive?: boolean;
  isCompleted?: boolean;
  isCurrent?: boolean;
  isDisabled?: boolean;
}

export const CircleStep: FC<CircleStepProps> = ({ label, title, subtile, isCompleted, isCurrent }) => (
  <Box>
    <VStack>
      {isCompleted ? (
        <Flex w="12" h="12" bgColor="blue.500" color="white" alignItems="center" justifyContent="center" rounded="full">
          <Check />
        </Flex>
      ) : (
        <Flex
          w="12"
          h="12"
          bgColor="white"
          color={isCurrent ? "blue.500" : "gray.600"}
          alignItems="center"
          justifyContent="center"
          rounded="full"
          border="2px"
          borderColor={isCurrent ? "blue.500" : "gray.300"}
          fontSize="lg"
          fontWeight="semibold"
        >
          {label}
        </Flex>
      )}
      <Text color={isCurrent ? "blue.800" : "gray.700"} lineHeight="4">
        <b>{title}</b>
      </Text>
      <Text color={isCurrent ? "blue.00" : "gray.600"} fontWeight="medium" lineHeight="1">
        {subtile}
      </Text>
    </VStack>
  </Box>
);
