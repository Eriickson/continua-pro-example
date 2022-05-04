import React, { FC, ReactElement } from "react";

import { Box, Img, Text, chakra, Stack, HStack, GridItem, Grid, Flex, Progress } from "@chakra-ui/react";
import { Card, CardContainer } from "@/components";
import { useSelector } from "@/store";
import { FooterInformation } from "./FooterInformation";

interface CardInformationItem {
  title: string;
  value: number | string;
  description?: string | ReactElement;
  avg?: number;
  colorTitle?: string;
}

interface CardInformationProps {
  items: CardInformationItem[];
}

const CardInformation: FC<CardInformationProps> = ({ items }) => {
  return (
    <Card h="full">
      <CardContainer>
        <HStack justifyContent="space-between" maxW="4xl" h="full" spacing={10} alignItems="flex-start">
          {items.map((item, i) => (
            <Stack key={i} h="full" justifyContent="space-between">
              <Box>
                <Text fontWeight="medium" color="gray.600">
                  {item.title}
                </Text>
                <Text color={item.colorTitle} fontWeight="bold" fontSize="4xl">
                  {item.value || 0}
                </Text>
              </Box>
              <Box>
                {item.description && (
                  <Text fontSize="sm" maxW="xs" lineHeight="none" fontWeight="medium" color="gray.600">
                    {item.description}
                  </Text>
                )}
                {item.avg !== undefined && (
                  <Text fontWeight="medium" color="gray.800">
                    {item.avg || 0}% avg.
                  </Text>
                )}
              </Box>
            </Stack>
          ))}
        </HStack>
      </CardContainer>
    </Card>
  );
};

export const PerformancePanel = () => {
  const { campaign } = useSelector(({ campaigns }) => campaigns.mailing);

  return (
    <Stack>
      <Grid placeContent="baseline" templateRows="repeat(3, 1fr)" templateColumns="repeat(12, 1fr)" gap={2}>
        <GridItem rowSpan={2}>
          <Card>
            <CardContainer>
              <Box p="4">
                <Img
                  userSelect="none"
                  maxW="48"
                  src="https://lagunabaypanama.com/wp-content/uploads/1363BKTT-400x800.jpg"
                />
              </Box>
            </CardContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={11}>
          <CardInformation
            items={[
              {
                title: "Open rate",
                value: "Good",
                colorTitle: "primary.500",
                description: (
                  <>
                    <chakra.b color="gray.700">{campaign?.report?.data.open_rate}% </chakra.b>of your audience opened
                    this campaign after they received it.
                  </>
                ),
              },
              {
                title: "people opened",
                value: Number(campaign?.report?.data.unique_opens),
                description: "Open rate of the last 10 campaigns",
                avg: campaign?.report?.data.open_rate,
              },
              {
                title: "total opens",
                value: Number(campaign?.report?.data.opens),
              },
            ]}
          />
        </GridItem>
        <GridItem colSpan={11}>
          <CardInformation
            items={[
              {
                title: "Click rate",
                value: "Poor",
                colorTitle: "red.500",
                description: (
                  <>
                    <chakra.b color="gray.700">{campaign?.report?.data.click_rate}% </chakra.b> of your audience clicked
                    a link in this campaign after they opened it.
                  </>
                ),
              },
              {
                title: "people clicked",
                value: Number(campaign?.report?.data.unique_clicks),
                description: "Click rate of the last 10 campaigns.",
                avg: campaign?.report?.data.click_rate,
              },
              {
                title: "total clicks",
                value: Number(campaign?.report?.data.clicks),
              },
            ]}
          />
        </GridItem>
        <GridItem colSpan={12}>
          <CardInformation
            items={[
              {
                title: "Unsubscribe rate",
                value: "Good",
                colorTitle: "primary.500",
                description: (
                  <>
                    <chakra.b color="gray.700">{campaign?.report?.data.unsubscribe_rate}% </chakra.b> of your audience
                    wasn’t interested in receiving this campaing.
                  </>
                ),
              },
              {
                title: "people unsubscribed",
                value: Number(campaign?.report?.data.unique_clicks),
                description: "Unsubscribe rate of the last 10 campaigns.",
                avg: campaign?.report?.data.unsubscribe_rate,
              },
              {
                title: "people flagged as SPAM",
                value: Number(campaign?.report?.data.clicks),
                description: "Spam rate of the last 10 campaigns",
                avg: 0,
              },
            ]}
          />
        </GridItem>
        <GridItem colSpan={12}>
          <CardInformation
            items={[
              {
                title: "Open rate",
                value: "Good",
                colorTitle: "primary.500",
                description: (
                  <>
                    <chakra.b color="gray.700">{campaign?.report?.data.open_rate}% </chakra.b>of your audience opened
                    this campaign after they received it.
                  </>
                ),
              },
              {
                title: "emails delivered",
                /* (bounces_soft * 100) / bounces */
                value: `${Number(campaign?.report?.data.unique_opens || 0)} (${
                  (campaign?.report?.data.bounces_soft || 0 * 100) / (campaign?.report?.data.bounces || 1)
                }%)`,
                description: "Open rate of the last 10 campaigns",
                avg: campaign?.report?.data.open_rate,
              },
              {
                title: "emails bounced",
                value: `${campaign?.report?.data.bounces || 0} (${
                  Number(campaign?.report?.data.bounces_soft || 0 * 100) / (campaign?.report?.data.bounces || 1)
                }%)`,
                avg: campaign?.report?.data.bounce_rate,
              },
            ]}
          />
        </GridItem>
        <GridItem h="max-content" colSpan={12}>
          <Card>
            <CardContainer>
              <Flex mb="2" justifyContent="space-between" alignItems="flex-end">
                <Box>
                  <Text fontWeight="medium">Bounces</Text>
                  <Text fontWeight="medium">0% Hard Bbouces</Text>
                </Box>
                <Text fontWeight="medium">0% Hard Bbouces</Text>
              </Flex>
              <Progress colorScheme="primary" value={75} />
            </CardContainer>
          </Card>
        </GridItem>
        <FooterInformation />
      </Grid>
    </Stack>
  );
};
