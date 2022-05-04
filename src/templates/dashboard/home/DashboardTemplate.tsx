import { Card, CardContainer } from "@/components";
import {
  Badge,
  Divider,
  GridItem,
  HStack,
  Progress,
  SimpleGrid,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const DashboardTemplate = () => {
  return (
    <div>
      <SimpleGrid gap={2} columns={12}>
        <GridItem colSpan={9}>
          <Card>
            <CardContainer></CardContainer>
          </Card>
        </GridItem>
        <GridItem colSpan={3}>
          <Card>
            <CardContainer>
              <Text textAlign="center" fontWeight="bold" fontSize="xl" color="primary.500">
                Clientes con Mayor Actividad
              </Text>
            </CardContainer>
            <Divider />
            <CardContainer>
              <SimpleGrid gap={3} columns={12} flexWrap="wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <GridItem key={item} colSpan={3}>
                    <Tag
                      size="lg"
                      textAlign="center"
                      w="full"
                      isTruncated
                      variant="outline"
                      rounded="sm"
                      colorScheme="secondary"
                    >
                      Client 1
                    </Tag>
                  </GridItem>
                ))}
              </SimpleGrid>
            </CardContainer>
            <Divider />
            <CardContainer>
              <Stack spacing={5}>
                <Stack spacing={0.5}>
                  <Stat>
                    <HStack justifyContent="space-between">
                      <StatLabel>Email</StatLabel>
                      <StatHelpText>$829,910 of $1M</StatHelpText>
                    </HStack>{" "}
                  </Stat>
                  <Progress rounded="sm" value={80} />
                </Stack>
                <Stack spacing={0.5}>
                  <Stat>
                    <HStack justifyContent="space-between">
                      <StatLabel>SMS</StatLabel>
                      <StatHelpText>$829,910 of $1M</StatHelpText>
                    </HStack>{" "}
                  </Stat>
                  <Progress colorScheme="red" rounded="sm" value={20} />
                </Stack>
                <Stack spacing={0.5}>
                  <Stat>
                    <HStack justifyContent="space-between">
                      <StatLabel>Whatsapp</StatLabel>
                      <StatHelpText>$829,910 of $1M</StatHelpText>
                    </HStack>{" "}
                  </Stat>
                  <Progress colorScheme="green" rounded="sm" value={40} />
                </Stack>
              </Stack>
            </CardContainer>
          </Card>
        </GridItem>
      </SimpleGrid>
    </div>
  );
};
