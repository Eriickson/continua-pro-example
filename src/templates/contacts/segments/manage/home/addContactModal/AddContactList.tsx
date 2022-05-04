import { useAction, useSelector } from "@/store";
import { Box, Flex, IconButton, ListItem, Skeleton, Stack, Text, List, Divider, HStack } from "@chakra-ui/react";
import React, { FC, Fragment } from "react";
import { useHandleResponse } from "@/hooks";
import { Contact } from "@continuapro/entity";
import { ChevronsRight } from "react-feather";

interface AddContactListProps {
  segmentId: number;
  contactsList: Contact[];
  newContactToAdd(contact: Contact[]): void;
}

export const AddContactList: FC<AddContactListProps> = ({ segmentId, contactsList, newContactToAdd }) => {
  const { addContactToSegment } = useAction();
  const { getContacts } = useSelector(({ contacts }) => contacts);

  const handleResponse = useHandleResponse();

  async function handleSubmit(contact_ids: number[]) {
    const response = await addContactToSegment({ id: segmentId, contact_ids });
    handleResponse(response);
  }

  return (
    <Box flex="1">
      {getContacts.isLoading ? (
        <Stack>
          <Skeleton height="5" />
          <Skeleton height="5" />
          <Skeleton height="5" />
          <Skeleton height="5" />
        </Stack>
      ) : (
        <Box>
          <HStack mb="1" pr="4" justifyContent="space-between">
            <Text fontWeight="medium">Lista de todos contactos ({contactsList.length})</Text>
            <IconButton
              aria-label=""
              icon={<ChevronsRight size="1.25rem" />}
              size="sm"
              variant="ghost"
              colorScheme="secondary"
              _focus={{}}
              onClick={() => newContactToAdd(contactsList)}
            />
          </HStack>
          <Box borderWidth="1px" mr="2" p="2">
            <List spacing={2}>
              {contactsList.length ? (
                contactsList.map((contact, i) => (
                  <Fragment key={contact.id}>
                    {i !== 0 && <Divider />}
                    <ListItem>
                      <Flex justifyContent="space-between">
                        <Box lineHeight="4">
                          <Text fontWeight="semibold">{contact.name}</Text>
                          <Text fontSize="sm" fontWeight="normal">
                            {contact.email}
                          </Text>
                        </Box>
                        <IconButton
                          aria-label=""
                          icon={<ChevronsRight size="1.25rem" />}
                          size="sm"
                          variant="ghost"
                          colorScheme="secondary"
                          _focus={{}}
                          onClick={() => newContactToAdd([contact])}
                        />
                      </Flex>
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
      )}
    </Box>
  );
};
