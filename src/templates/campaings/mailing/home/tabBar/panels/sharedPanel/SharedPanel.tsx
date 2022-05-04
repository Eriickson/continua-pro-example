import { Card, CardContainer } from "@/components";
import { Tag, Avatar, Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import moment from "moment";
import React, { FC, Fragment } from "react";

import "moment/locale/es-do";
import { MenuOptions } from "./menuOptions/MenuOptions";
import { Campaign } from "@continuapro/entity";
import { useRouter } from "next/router";

interface SharedPanelProps {
  campaigns: Campaign[];
}

export const SharedPanel: FC<SharedPanelProps> = ({ campaigns }) => {
  const { push } = useRouter();
  return (
    <VStack alignItems="stretch">
      <Card>
        {!campaigns.length && <CardContainer></CardContainer>}
        {campaigns.map((campaign) => (
          <Fragment key={campaign.id}>
            <CardContainer>
              <Flex alignItems="center" justifyContent="space-between">
                <HStack spacing={4} alignItems="center">
                  <Avatar rounded="sm" />
                  <Box>
                    <HStack>
                      <Text
                        cursor="pointer"
                        onClick={() => push(`/campaigns/mailing/${campaign.id}`)}
                        fontWeight="medium"
                        fontSize="lg"
                        color="secondary.500"
                      >
                        {campaign.name}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="gray.800">
                      {moment(campaign.last_update).locale("es-do").calendar()}
                    </Text>
                  </Box>
                </HStack>
                <HStack>
                  {campaign.synced ? (
                    <Tag colorScheme="green" variant="solid" size="sm">
                      Sincronizada
                    </Tag>
                  ) : (
                    <Tag colorScheme="red" variant="solid" size="sm">
                      No Sincronizada
                    </Tag>
                  )}
                  <MenuOptions campaign={campaign} />
                </HStack>
              </Flex>
            </CardContainer>
            <Divider />
          </Fragment>
        ))}
      </Card>
    </VStack>
  );
};
