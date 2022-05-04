import { Button, Flex, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactElement } from "react";
import { ArrowLeft, Menu } from "react-feather";
import { ButtonBack } from "../buttonBack";
import { Card } from "../cards/Card";
import { CardContainer } from "../cards/CardContainer";

interface SectionTopTitleProps {
  title: string;
  urlBack?: string;
  rightButtons?: ReactElement;
}

export const SectionTopTitle: FC<SectionTopTitleProps> = ({ title, urlBack, rightButtons }) => {
  const { push } = useRouter();

  return (
    <Box>
      <Card>
        <CardContainer>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="black" fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <HStack>
              {urlBack && <ButtonBack pathname={urlBack} />}
              {rightButtons}
            </HStack>
          </Flex>
        </CardContainer>
      </Card>
    </Box>
  );
};
