import React, { useEffect } from "react";

import Link from "next/link";

import { Box, Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";

import { Card, CardContainer } from "@/components";
import { useAction } from "@/store";

import { ContactsTable } from "./contactsTable/ContactsTable";
import { CreateOrUpdateContactModal } from "./createOrUpdateContactModal/CreateOrUpdateContactModal";

export const ContactsPanel = () => {
  const { getContacts, getPersonalizedAttributes } = useAction();

  useEffect(() => {
    getContacts();
    getPersonalizedAttributes();
  }, []);

  return (
    <VStack w="full" alignItems="inherit">
      <Card>
        <CardContainer>
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading color="black" fontSize="2xl">
                Listado de Contactos
              </Heading>
            </Box>
            <HStack>
              <CreateOrUpdateContactModal
                type="CREATE"
                button={<Button colorScheme="primary">Agregar Contactos</Button>}
              />
              <Button colorScheme="primary" variant="outline">
                Importar Contactos
              </Button>
              <Button colorScheme="primary" variant="outline">
                Exportar Contactos
              </Button>
              <Link href="/contacts/segments/manage">
                <a>
                  <Button colorScheme="primary">Administrar Segmentos</Button>
                </a>
              </Link>
              <Link href={{ pathname: "/account", query: { accountContactTabBarItem: 2 } }}>
                <a>
                  <Button colorScheme="primary" variant="outline">
                    Lista de supresión
                  </Button>
                </a>
              </Link>
            </HStack>
          </Flex>
        </CardContainer>
      </Card>
      <ContactsTable />
    </VStack>
  );
};
