import { DownloadSupportIcon, ReadMessageIcon } from "@/assets";
import { Card, CardContainer } from "@/components";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  chakra,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const EmailPanel = () => {
  return (
    <Card>
      <CardContainer>
        <Flex mb="5" justifyContent="space-between" alignItems="center">
          <Text lineHeight="none">
            <chakra.span color="gray.700">
              Lo que ha estado haciendo
            </chakra.span>
            <br />
            <chakra.span fontSize="xl" color="secondary.500">
              <b>carlos@continua.com.mx</b>
            </chakra.span>
          </Text>
          <Button colorScheme="primary" variant="outline">
            Acciones
          </Button>
        </Flex>
        <Box>
          <Table variant="simple" mb="10">
            <Thead bgColor="gray.100">
              <Tr>
                <Th w="40" color="gray.900">
                  23 Jun. 2021
                </Th>
                <Th w="16" color="gray.900"></Th>
                <Th color="gray.900"></Th>
                <Th color="gray.600" textAlign="end">
                  2 entradas registradas
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>10:32:53 a.m.</Td>
                <Td>
                  <ReadMessageIcon />
                </Td>
                <Td>
                  <Box>
                    <Text color="secondary.500" fontWeight="bold" fontSize="lg">
                      Open
                    </Text>
                    <Text color="gray.700" fontSize="sm">
                      PC Mac OS X Apple Mail
                    </Text>
                  </Box>
                </Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>10:32:53 a.m.</Td>
                <Td>
                  <DownloadSupportIcon />
                </Td>
                <Td>
                  <Box>
                    <Text color="secondary.500" fontWeight="bold" fontSize="lg">
                      Receive
                    </Text>
                    <Text color="gray.700" fontSize="sm">
                      -
                    </Text>
                  </Box>
                </Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
          <Table variant="simple">
            <Thead bgColor="gray.100">
              <Tr>
                <Th w="40" color="gray.900">
                  23 Jun. 2021
                </Th>
                <Th w="16" color="gray.900"></Th>
                <Th color="gray.900"></Th>
                <Th color="gray.600" textAlign="end">
                  2 entradas registradas
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>10:32:53 a.m.</Td>
                <Td>
                  <ReadMessageIcon />
                </Td>
                <Td>
                  <Box>
                    <Text color="secondary.500" fontWeight="bold" fontSize="lg">
                      Open
                    </Text>
                    <Text color="gray.700" fontSize="sm">
                      PC Mac OS X Apple Mail
                    </Text>
                  </Box>
                </Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>10:32:53 a.m.</Td>
                <Td>
                  <DownloadSupportIcon />
                </Td>
                <Td>
                  <Box>
                    <Text color="secondary.500" fontWeight="bold" fontSize="lg">
                      Receive
                    </Text>
                    <Text color="gray.700" fontSize="sm">
                      -
                    </Text>
                  </Box>
                </Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </CardContainer>
    </Card>
  );
};
