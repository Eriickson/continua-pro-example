import { chakra, Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const CampaignsAvailable = () => {
  const { pathname } = useRouter();
  const [messengerServices] = useState([
    {
      id: 1,
      name: "SMS",
      description: "SMS",
      pathname: "/campaigns/sms",
    },
    // {
    //   id: 2,
    //   name: "WhatsApp",
    //   description: "WhatsApp",
    //   pathname: "/campaigns/whatsapp",
    // },
    // {
    //   id: 3,
    //   name: "Live Chat",
    //   description: "Live Chat",
    //   pathname: "/campaigns/live-chat",
    // },
  ]);
  return (
    <HStack maxW="36">
      {messengerServices.map((messengerService) => (
        <Box key={messengerService.id} flex={1}>
          <Link passHref href={messengerService.pathname}>
            <chakra.a>
              <Button
                w="full"
                colorScheme="primary"
                variant={pathname.includes(messengerService.pathname) ? "solid" : "outline"}
                bgColor={!pathname.includes(messengerService.pathname) ? "white" : undefined}
              >
                {messengerService.name}
              </Button>
            </chakra.a>
          </Link>
        </Box>
      ))}
    </HStack>
  );
};
