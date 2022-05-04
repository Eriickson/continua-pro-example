import { Card, CardContainer, MainTable, TabBarsEnclosed } from "@/components";
import { useSelector } from "@/store";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import moment from "moment";
import { StatsLogItem } from "@continuapro/entity";

export const ContactActiviyTabBar = () => {
  const { campaignStatsLog } = useSelector(({ campaigns }) => campaigns.mailing);

  const itemsTabs = useMemo<{ name: string; campaignStatsLog: StatsLogItem[] }[]>(
    () =>
      campaignStatsLog
        ? /* @ts-ignore */
          Object.keys(campaignStatsLog).map((key) => ({ name: key, campaignStatsLog: campaignStatsLog[key] }))
        : [],
    [campaignStatsLog]
  );

  return (
    <div>
      {itemsTabs.length ? (
        <TabBarsEnclosed
          items={itemsTabs.map((item) => ({
            label: item.name,
            PanelComponent: () => <ContactActiviyTable statsLogItem={item.campaignStatsLog} />,
          }))}
        />
      ) : (
        <Card>
          <CardContainer>
            <Text textAlign="center" fontWeight="medium" color="gray.500" fontSize="xl">
              Cannot get logs for this campaign.
            </Text>
          </CardContainer>
        </Card>
      )}
    </div>
  );
};

interface ContactActiviyTableProps {
  statsLogItem: StatsLogItem[];
}

const ContactActiviyTable: FC<ContactActiviyTableProps> = ({ statsLogItem }) => {
  console.log(statsLogItem);

  return (
    <Stack>
      <Card>
        <CardContainer>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">{statsLogItem.length} Contactos Abrieron este correo</Text>
            <Button colorScheme="primary">Descargar</Button>
          </Flex>
        </CardContainer>
      </Card>
      <MainTable
        data={statsLogItem}
        layout={{
          columns: [
            { label: "email", path: "email" },
            { label: "Occurrences", path: "occurrences" },
            {
              label: "Date",
              path: "timestamp",
              customComponent: ({ row }) => <Text>{moment(row.timestamp * 1000).format("LLL")}</Text>,
            },
            {
              label: "OS",
              path: "user_agent?.browser.os.family",
              customComponent: ({ row }) => <Text>{row.user_agent?.os.family || "-"}</Text>,
            },
            {
              label: "Browser",
              path: "user_agent?.browser.family",
              customComponent: ({ row }) => <Text>{row.user_agent?.browser.family || "-"}</Text>,
            },
            {
              label: "IP",
              path: "user_agent?.ip",
              customComponent: ({ row }) => <Text>{row.user_agent?.ip || "-"}</Text>,
            },
          ],
        }}
      />
    </Stack>
  );
};
