import React, { FC, useMemo, useState } from "react";
import { Box, GridItem, HStack, IconButton, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContainer } from "@/components";
import { ChevronLeft, ChevronRight } from "react-feather";
import { CreditPlan } from "@/types";
import numeral from "numeral";
import { BuyPlanModal } from "./buyPlanModal/BuyPlanModal";

interface CreditPlanItemProps {
  creditPlan: CreditPlan;
}

export const CreditPlanItem: FC<CreditPlanItemProps> = ({ creditPlan }) => {
  const [currentIndextActive, setCurrentIndextActive] = useState(0);

  const currentCreditPlan = useMemo(() => creditPlan.price_arrays[currentIndextActive], [currentIndextActive]);

  return (
    <GridItem colSpan={3}>
      <Card>
        <CardContainer>
          <Stack spacing={2}>
            <Box>
              <Text fontSize="xl" textAlign="center" fontWeight="semibold" color="secondary.500">
                {creditPlan.name}
              </Text>
            </Box>
            <HStack justifyContent="center">
              <IconButton size="sm" aria-label="change-plan" _focus={{}} icon={<ChevronLeft size="1.25rem" />} />
              <Text fontSize="lg" textAlign="center" fontWeight="semibold" color="gray.700">
                {currentCreditPlan?.name}
              </Text>
              <IconButton size="sm" aria-label="change-plan" _focus={{}} icon={<ChevronRight size="1.25rem" />} />
            </HStack>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={({ activeIndex }) => setCurrentIndextActive(activeIndex)}
            >
              {creditPlan.price_arrays.map((priceArray) => (
                <SwiperSlide key={priceArray.id}>
                  <Box>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th border="none">
                            <Text textAlign="center">Créditos</Text>
                          </Th>
                          <Th border="none">
                            <Text textAlign="center">Precio(MXN)</Text>
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {priceArray.entries.map((entry) => (
                          <Tr key={entry.id}>
                            <Td border="none" py="2">
                              <Text textAlign="center">{numeral(entry.credit_amount).format("0,0")}</Text>
                            </Td>
                            <Td border="none" py="2">
                              <Text textAlign="center">{numeral(entry.price).format("$0,0.0")}</Text>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            <BuyPlanModal />
          </Stack>
        </CardContainer>
      </Card>
    </GridItem>
  );
};
