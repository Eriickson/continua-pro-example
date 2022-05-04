import { useAction } from "@/store";
import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ContactsListTabBar } from "./tabBar/ContactsListTabBar";

export const ContactsListTemplate = () => {
  const { getContactSegments } = useAction();

  useEffect(() => {
    getContactSegments();
  }, []);

  return (
    <Box>
      <ContactsListTabBar />
    </Box>
  );
};
