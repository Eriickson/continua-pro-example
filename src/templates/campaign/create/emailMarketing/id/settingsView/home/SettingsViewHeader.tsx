import React from "react";

import { Card, CardContainer } from "@/components";
import { Button, Flex, Heading, HStack, Skeleton } from "@chakra-ui/react";
import { useSelector } from "@/store";
import { useRouter } from "next/router";

export const SettingsViewHeader = () => {
  const { isLoading, data } = useSelector(({ campaignTemplates }) => campaignTemplates.mailing.getCampaignTemplate);
  const { push, query } = useRouter();

  return (
    <div>
      <Card>
        <CardContainer>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading size="md">{isLoading ? <Skeleton height="1rem" w="80" /> : data?.name}</Heading>
            <HStack>
              <Button size="sm" onClick={() => push("/campaigns/mailing/create")}>
                Cerrar
              </Button>
              <Button
                onClick={
                  () =>
                    (window.location.href = `/campaigns/mailing/${query.id}/editor-preview`) /* push(`/campaigns/mailing/${query.id}/editor-preview`) */
                }
                variant="outline"
                size="sm"
                colorScheme="secondary"
              >
                Editar Email
              </Button>
            </HStack>
          </Flex>
        </CardContainer>
      </Card>
    </div>
  );
};
