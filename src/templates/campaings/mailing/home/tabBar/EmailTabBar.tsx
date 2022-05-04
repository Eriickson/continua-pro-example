import React, { FC, useEffect } from "react";

import { TabBarsSimple } from "@/components";
import { DashboardPanel, SharedPanel, TemplatesPanel } from "./panels";
import { Button, CircularProgress, HStack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useAction, useSelector } from "@/store";

export const EmailTabBar = () => {
  const { getCampaigns } = useAction();

  const { mailing } = useSelector(({ campaigns }) => campaigns);
  const { campaignTemplates, getCampaignTemplates } = useSelector(({ campaignTemplates }) => campaignTemplates.mailing);

  useEffect(() => {
    getCampaigns({ campaignType: "mailing", status: "draft" });
    getCampaigns({ campaignType: "mailing", status: "sent" });
    getCampaigns({ campaignType: "mailing", status: "scheduled" });
  }, []);

  return (
    <TabBarsSimple
      items={[
        { label: "Dashboard", PanelComponent: DashboardPanel },
        {
          label: (
            <TitleTabBar
              title="Drafts"
              count={mailing.campaigns.draft.length}
              isLoading={mailing.getCampaigns.isLoading}
            />
          ),
          PanelComponent: () => <SharedPanel campaigns={mailing.campaigns.draft} />,
        },
        {
          label: (
            <TitleTabBar
              title="Outbox"
              count={mailing.campaigns.scheduled.length}
              isLoading={mailing.getCampaigns.isLoading}
            />
          ),
          PanelComponent: () => <SharedPanel campaigns={mailing.campaigns.scheduled} />,
        },
        {
          label: (
            <TitleTabBar
              title="Sent"
              count={mailing.campaigns.sent.length}
              isLoading={mailing.getCampaigns.isLoading}
            />
          ),
          PanelComponent: () => <SharedPanel campaigns={mailing.campaigns.sent} />,
        },
        {
          label: (
            <TitleTabBar
              title="Templates"
              count={campaignTemplates.length}
              isLoading={getCampaignTemplates.isLoading}
            />
          ),
          PanelComponent: TemplatesPanel,
        },
      ]}
      rightComponent={
        <HStack>
          <Link href="/campaigns/mailing/create">
            <a>
              <Button colorScheme="primary">Crear Campaña Email MKT</Button>
            </a>
          </Link>
          <Link href="/campaigns/mailing/create">
            <a>
              <Button colorScheme="primary">Crear Campaña A/B</Button>
            </a>
          </Link>
        </HStack>
      }
    />
  );
};

interface TitleTabBarProps {
  isLoading: boolean;
  title: string;
  count: number;
}

const TitleTabBar: FC<TitleTabBarProps> = ({ count, isLoading, title }) => {
  return (
    <HStack>
      <Text>{title}</Text>{" "}
      {isLoading ? (
        <CircularProgress size="1rem" isIndeterminate color="secondary.500" />
      ) : (
        <Tag size="sm" colorScheme="green">
          {count}
        </Tag>
      )}
    </HStack>
  );
};
