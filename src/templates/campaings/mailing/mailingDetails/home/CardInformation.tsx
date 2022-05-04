import { Card, CardContainer } from "@/components";
import { useSelector } from "@/store";
import { Text } from "@chakra-ui/react";
import React from "react";

export const CardInformation = () => {
  const { campaign } = useSelector(({ campaigns }) => campaigns.mailing);

  return (
    <div>
      <Card>
        <CardContainer>
          <Text lineHeight="none" color="secondary.500" fontSize="xl" fontWeight="medium">
            {campaign?.sumary.name}
          </Text>
          <Text color="gray.600">{campaign?.sumary.description}</Text>
        </CardContainer>
      </Card>
    </div>
  );
};
