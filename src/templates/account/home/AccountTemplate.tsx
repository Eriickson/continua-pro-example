import { useAction } from "@/store";
import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AccountContactsTabBar } from "./tabBar/AccountContactsTabBar";

export const AccountTemplate = () => {
  const { getNotificationPreferences, getNotificationSchedules, getAccountSettings } = useAction();
  useEffect(() => {
    getNotificationPreferences();
    getNotificationSchedules();
    getAccountSettings();
  }, []);

  return (
    <Box>
      <Box mb="2">
        <Heading fontWeight="medium" fontSize="2xl" color="secondary.500">
          Cuentas
        </Heading>
      </Box>
      <AccountContactsTabBar />
    </Box>
  );
};
