import { Card, CardContainer } from "@/components";
import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";

export const FooterInformation = () => {
  return (
    <>
      <GridItem colSpan={6}>
        <Card h="full">
          <CardContainer>
            <Text fontSize="xl" fontWeight="semibold">
              Hard bounces (permanently failed)
            </Text>
            <Text lineHeight="5">
              100% of your audience opened this campaign this may indicate you’ve uploaded invalid email addresses or
              have been flagged as a spammer by an ISP receiving the email. If this rate regularly exceedes
              %&#123;resellerName&#125;’s acceptable stander, your account may be spender until our team can investigate
              further.
            </Text>
          </CardContainer>
        </Card>
      </GridItem>
      <GridItem colSpan={6}>
        <Card>
          <CardContainer>
            <Text fontSize="xl" fontWeight="semibold">
              Soft bounces (temporarily failed)
            </Text>
            <Text lineHeight="5">
              There are several reasons a soft bounce might occur. A subscriber’s inbox could be full, the receiving
              server might be down or offline, or your email message was too large. It is also possible that the ISP
              (Gmail or Hotmail) have temporarily blocked you due to SPAM complaints. We’ll attempt to deliver to these
              email addresses for 72 hours. If no delivery can be made and these email addresses continuo to bounce
              during the delivery of other campaigns (4campaigns in total), they will be cleaned from your contacts so
              no further emails can be sent to them.
            </Text>
          </CardContainer>
        </Card>
      </GridItem>
    </>
  );
};
