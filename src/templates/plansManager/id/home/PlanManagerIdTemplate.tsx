import React, { useEffect } from "react";
import { GridItem, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Frown } from "react-feather";

import { ButtonBack, Card, CardContainer } from "@/components";
import { useAction, useSelector } from "@/store";

import { PriceArrayTable } from "./priceArrayTable/PriceArrayTable";
import { UpdateCreditPlan } from "./updateCreditPlan/UpdateCreditPlan";
import { DeleteCreditPlan } from "./DeleteCreditPlan";
import { AddPriceArrayModal } from "./addPriceArrayModal/AddPriceArrayModal";

export const PlanManagerIdTemplate = () => {
  const { getChannels } = useAction();

  const { creditPlan } = useSelector(({ creditPlans }) => creditPlans);

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div>
      <VStack alignItems="stretch">
        <Card>
          <CardContainer>
            <HStack justifyContent="space-between">
              <UpdateCreditPlan />
              <HStack>
                <ButtonBack pathname="/plans-manager" />
                <DeleteCreditPlan />
                <AddPriceArrayModal />
              </HStack>
            </HStack>
          </CardContainer>
        </Card>
        <SimpleGrid gap={3} columns={12}>
          {creditPlan?.price_arrays.length === 0 ? (
            <GridItem colSpan={12}>
              <Card>
                <CardContainer color="gray.400">
                  <VStack>
                    <Frown size="3rem" />
                    <Text fontWeight="medium" fontSize="lg">
                      No hay precios asociados a este plan
                    </Text>
                  </VStack>
                </CardContainer>
              </Card>
            </GridItem>
          ) : (
            creditPlan?.price_arrays.map((price) => <PriceArrayTable key={price.id} price={price} />)
          )}
        </SimpleGrid>
      </VStack>
    </div>
  );
};
