import React, { FC, ReactElement } from "react";
import { GridItem, Text } from "@chakra-ui/react";

interface HeroPresentationProps {
  title: string;
  value?: string | ReactElement;
}

export const HeroPresentation: FC<HeroPresentationProps> = ({ title, value }) => (
  <GridItem colSpan={3}>
    <Text fontWeight="light" fontSize="sm" color="gray.700">
      {title}
    </Text>
    <Text color="primary.500" fontWeight="medium">
      {value}
    </Text>
  </GridItem>
);
