import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Card } from "../cards/Card";
import { CardContainer } from "../cards/CardContainer";
import { ProfileSession } from "./ProfileSession";

interface MainHeaderProps {
  title: string;
  subtitle?: string;
}

export const MainHeader: FC<MainHeaderProps> = ({ title, subtitle }) => {
  return (
    <Card>
      <CardContainer>
        <Flex ml="2" justifyContent="space-between" alignItems="center">
          <Box lineHeight={["normal"]}>
            <Heading fontSize={["xl", "2xl"]} color="gray.900" fontWeight="medium">
              {title}
            </Heading>
            <Text fontSize={["sm", null, "md"]} color="gray.700">
              {subtitle}
            </Text>
          </Box>
          <ProfileSession />
        </Flex>
      </CardContainer>
    </Card>
  );
};
