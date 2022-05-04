import React from "react";

import { Box, Flex, GridItem, HStack, Image, SimpleGrid } from "@chakra-ui/react";

import { FormProvider, InputControl, InputMaskControl, InputSelect, InputSelectControl } from "@/components";

export const BuyPlanForm = () => {
  return (
    <FormProvider
      id="buy-plan-form"
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <SimpleGrid gap={2} columns={12}>
        <GridItem colSpan={12}>
          <InputControl formControl={{ label: "Nombre del titular" }} name="nameOwner" rules={{ required: true }} />
        </GridItem>
        <GridItem colSpan={12}>
          <Box pos="relative">
            <InputMaskControl
              mask="9999 9999 9999 9999"
              formControl={{ label: "Información de la tarjeta" }}
              name="numberCard"
              inputProps={{
                placeholder: "1234 1234 1234 1234",
                borderBottomRadius: "0",
                _focus: { zIndex: 1, borderColor: "primary.500", ring: "1", ringColor: "primary.500" },
              }}
              rules={{ required: true }}
            />
            <HStack spacing={0} right="2" top="8" pos="absolute">
              {["visa", "master-card", "american-express", "union-pay"].map((name) => (
                <Image key={name} w="8" p="0.5" src={`/creditCards/${name}.svg`} alt="111" />
              ))}
            </HStack>
          </Box>
          <Flex>
            <InputMaskControl
              mask="99/99"
              inputProps={{
                placeholder: "MM / YY",
                borderTopRadius: "0",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                _focus: { zIndex: 1, borderColor: "primary.500", ring: "1", ringColor: "primary.500" },
              }}
              name="date"
              rules={{ required: true }}
            />
            <InputMaskControl
              mask="999"
              name="cvc"
              inputProps={{
                placeholder: "CVC",
                borderTopRadius: "0",
                borderTopColor: "transparent",
                _focus: { zIndex: 1, borderColor: "primary.500", ring: "1", ringColor: "primary.500" },
              }}
              rules={{ required: true }}
            />
          </Flex>
        </GridItem>
      </SimpleGrid>
    </FormProvider>
  );
};
