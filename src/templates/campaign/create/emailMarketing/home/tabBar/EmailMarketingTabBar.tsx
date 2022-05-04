import { TabBarsSimple } from "@/components";
import { Badge, CircularProgress, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "@/store";
import { ProfessionalTemplatesPanel } from "./panels";
import { CreateEmailMarketing } from "../createEmailMarketing/CreateEmailMarketing";
import { HStack } from "@chakra-ui/react";

export const EmailMarketingTabBar = () => {
  const { campaignTemplates } = useSelector(({ campaignTemplates }) => campaignTemplates.mailing);
  const { isLoading } = useSelector(({ campaignTemplates }) => campaignTemplates.mailing.getCampaignTemplates);

  return (
    <div>
      <TabBarsSimple
        items={[
          {
            label: (
              <>
                <Text mr="2">Plantillas Profesionales</Text>
                {isLoading ? (
                  <CircularProgress size="1rem" isIndeterminate color="green.300" />
                ) : (
                  <Badge colorScheme="secondary">{campaignTemplates.length}</Badge>
                )}
              </>
            ),
            PanelComponent: ProfessionalTemplatesPanel,
          },
        ]}
        rightComponent={
          <HStack>
            <CreateEmailMarketing />
          </HStack>
        }
      />
    </div>
  );
};
