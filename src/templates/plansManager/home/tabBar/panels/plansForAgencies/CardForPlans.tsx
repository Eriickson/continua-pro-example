import { Card, CardContainer } from "@/components";
import { CreditPlan } from "@/contexts";
import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { Settings } from "react-feather";

interface CardForPlansProps {
  creditPlan: CreditPlan;
}

export const CardForPlans: FC<CardForPlansProps> = ({
  children,
  creditPlan,
}) => {
  return (
    <Card height="full">
      <CardContainer height="full">
        <Flex flexDir="column">
          <Flex justifyContent="space-between" flex="1">
            <Heading mb="5" size="md" color="secondary.500">
              {creditPlan.name}
              <Text color="gray.500" fontSize="sm" fontWeight="medium">
                (
                {creditPlan.price_arrays.length === 0
                  ? "Sin"
                  : creditPlan.price_arrays.length}{" "}
                Precios)
              </Text>
            </Heading>
            <Link href={`/plans-manager/${creditPlan.id}`}>
              <a>
                <IconButton
                  _focus={{}}
                  colorScheme="blue"
                  variant="ghost"
                  size="sm"
                  aria-label="Configurar"
                  icon={<Settings size="1.25rem" />}
                />
              </a>
            </Link>
          </Flex>
          {creditPlan.price_arrays.length === 0 ? (
            <Flex mb="2" justifyContent="center" flex="1">
              <Link href={{ pathname: `/plans-manager/${creditPlan.id}` }}>
                <a>
                  <Button _focus={{}}>Agregar Precios</Button>
                </a>
              </Link>
            </Flex>
          ) : (
            <HStack alignItems="flex-start" overflow="auto" mb="2">
              {children}
            </HStack>
          )}
        </Flex>
      </CardContainer>
    </Card>
  );
};
