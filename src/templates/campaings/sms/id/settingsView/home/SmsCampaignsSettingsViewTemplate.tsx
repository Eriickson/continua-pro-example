import React, { FC, useEffect } from "react";
import { Card, CardContainer } from "@/components";
import { Button, Flex, GridItem, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { SendTest } from "./sendTest";
import Link from "next/link";
import { useAction, useSelector } from "@/store";
import { SmsCampaignSettingsViewForm } from "./smsCampaignSettingsViewForm/SmsCampaignSettingsViewForm";
import { useRouter } from "next/router";
import { useHandleResponse } from "@/hooks";
import { SendCampaign } from "./sendCampaign";

export const SmsCampaignsSettingsViewTemplate: FC = () => {
  const { getContactSegments, updateCampaign, getCampaign, getCampaignTemplates } = useAction();
  const { campaign } = useSelector(({ campaigns }) => campaigns.sms);

  const { query } = useRouter();

  const handleResponse = useHandleResponse();

  async function onChange(value: any) {
    const response = await updateCampaign({ campaign: value, campaignType: "sms", id: Number(query.id) });

    handleResponse(response);
  }

  useEffect(() => {
    if (query.id) {
      getCampaign({ campaignType: "sms", id: Number(query.id) });
      getContactSegments();
      getCampaignTemplates({ campaignType: "sms" });
    }
  }, [query]);

  return (
    <div>
      <SimpleGrid gap={2} columns={12}>
        <GridItem colSpan={12}>
          <Card>
            <CardContainer>
              <Flex justifyContent="flex-end">
                <HStack>
                  <Link href="/campaigns/sms">
                    <a>
                      <Button _focus={{}} variant="ghost">
                        Cerrar
                      </Button>
                    </a>
                  </Link>
                </HStack>
              </Flex>
            </CardContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={4}>
          <Card>
            <CardContainer>
              <SmsCampaignSettingsViewForm onChange={onChange} />
            </CardContainer>
            <CardContainer>
              <HStack justifyContent="flex-end">
                <SendTest />
                <SendCampaign />
              </HStack>
            </CardContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={8}>
          <Card>
            <CardContainer>
              <Flex
                height="full"
                maxW="2xl"
                alignItems="center"
                justifyContent="center"
                p="5"
                border="1px"
                borderColor="gray.500"
                borderStyle="dashed"
              >
                <Text fontWeight="light" fontSize="xl">
                  {campaign?.content ? campaign?.content : "SMS PREVIEW"}
                </Text>
              </Flex>
            </CardContainer>
          </Card>
        </GridItem>
      </SimpleGrid>
    </div>
  );
};
