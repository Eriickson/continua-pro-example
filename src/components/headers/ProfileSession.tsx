import React from "react";

import { UserAvatar } from "@/assets";
import { Avatar, Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { MenuHeader } from "./MenuHeader";
import { useSelector } from "@/store";

export const ProfileSession = () => {
  const { profile } = useSelector(({ profile }) => profile);

  return (
    <Flex alignItems="center">
      <Box mr="2" textAlign="right" lineHeight="normal">
        <Tooltip placement="left" openDelay={250} hasArrow label={profile?.name}>
          <Text
            cursor="pointer"
            letterSpacing="-1px"
            fontFamily="monospace"
            color="gray.700"
            fontSize="lg"
            fontWeight="semibold"
          >
            {profile?.name?.slice(0, 18)}
          </Text>
        </Tooltip>
        <Text color="secondary.600" fontSize="sm" fontWeight="medium">
          {profile?.role_name}
        </Text>
      </Box>
      {profile?.profile_picture_url ? <Avatar src={profile.profile_picture_url} /> : <UserAvatar />}
      <MenuHeader />
    </Flex>
  );
};
