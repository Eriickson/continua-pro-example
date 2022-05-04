import React from "react";

import { Skeleton, Stack, Box } from "@chakra-ui/react";

import parser from "html-react-parser";

import { useSelector } from "@/store";

export const TemplateViewer = () => {
  const { isLoading } = useSelector(({ campaigns }) => campaigns.mailing.getCampaign);
  const { campaign } = useSelector(({ campaigns }) => campaigns.mailing);

  return (
    <Stack flex="1">
      {isLoading ? (
        <>
          <Skeleton height="3rem" w="full" />
          <Skeleton height="3rem" w="full" />
          <Skeleton height="3rem" w="full" />
          <Skeleton height="3rem" w="full" />
        </>
      ) : (
        <Box shadow="md" border="1px" borderColor="gray.200" w="lg">
          {parser(campaign?.sumary.campaign_template?.content || "")}
        </Box>
      )}
    </Stack>
  );
};
