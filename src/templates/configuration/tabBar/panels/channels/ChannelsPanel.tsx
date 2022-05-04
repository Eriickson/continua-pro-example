import React from "react";

import { HStack, Stack } from "@chakra-ui/react";

import { ChannelsTable } from "./ChannelsTable";
import { NewServiceProvider } from "./newServiceProvider";

export const ChannelsPanel = () => {
  return (
    <Stack>
      <HStack justifyContent="flex-end">
        <NewServiceProvider />
      </HStack>
      <ChannelsTable />
    </Stack>
  );
};
