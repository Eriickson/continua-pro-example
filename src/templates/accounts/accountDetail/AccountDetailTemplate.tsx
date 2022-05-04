import React, { useEffect } from "react";

import { ButtonBack, Card, CardContainer, TemplateContainer } from "@/components";
import { useAction, useSelector } from "@/store";
import { useRouter } from "next/router";
import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { AddressPanel } from "./panels/address/AddressPanel";
import { InformationPanel } from "./panels/information/InformationPanel";

export const AccountDetailTemplate = () => {
  const { getAccount } = useAction();
  const { account } = useSelector(({ accounts }) => accounts);
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getAccount({ id: Number(query.id) });
    }
  }, [query]);

  return (
    <TemplateContainer title="Cuenta">
      <Stack>
        <Card>
          <CardContainer>
            <Flex alignItems="flex-start" justifyContent="space-between">
              <HStack alignItems="flex-start">
                <Image
                  userSelect="none"
                  w="36"
                  src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
                  alt=""
                />
                <Stack>
                  <Text lineHeight="none" fontWeight="semibold" fontSize="2xl">
                    {account?.name}
                  </Text>
                  <Text color="gray.600" fontWeight="medium">
                    {account?.organization_name}
                  </Text>
                </Stack>
              </HStack>
              <HStack mb="2">
                <ButtonBack pathname="/accounts" />
              </HStack>
            </Flex>
          </CardContainer>
        </Card>
        <InformationPanel />
        <AddressPanel />
      </Stack>
    </TemplateContainer>
  );
};
