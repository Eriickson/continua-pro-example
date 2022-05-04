import { Box, Divider, HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react";
import { Contact } from "@continuapro/entity";
import React, { FC, Fragment } from "react";
import { ChevronsLeft } from "react-feather";

interface ListOfContactsToBeAddedProps {
  contacts: Contact[];
  removeContactToAdd(contact: Contact): void;
}

export const ListOfContactsToBeAdded: FC<ListOfContactsToBeAddedProps> = ({ contacts, removeContactToAdd }) => {
  return (
    <Box mt="2" flex="1">
      <Text mb="1" fontWeight="medium">
        Lista de contactos seleccionados ({contacts.length})
      </Text>
      <Box borderWidth="1px" mr="2" p="2">
        <List spacing={2}>
          {contacts.length ? (
            contacts.map((contact, i) => (
              <Fragment key={contact.id}>
                {i !== 0 && <Divider />}
                <ListItem>
                  <HStack>
                    <IconButton
                      aria-label=""
                      icon={<ChevronsLeft size="1.25rem" />}
                      size="sm"
                      variant="ghost"
                      colorScheme="secondary"
                      _focus={{}}
                      onClick={() => removeContactToAdd(contact)}
                    />
                    <Box lineHeight="4">
                      <Text fontWeight="semibold">{contact.name}</Text>
                      <Text fontSize="sm" fontWeight="normal">
                        {contact.email}
                      </Text>
                    </Box>
                  </HStack>
                </ListItem>
              </Fragment>
            ))
          ) : (
            <Text fontWeight="medium" color="gray.600" fontSize="lg" textAlign="center">
              No hay contactos seleccionados
            </Text>
          )}
        </List>
      </Box>
    </Box>
  );
};
