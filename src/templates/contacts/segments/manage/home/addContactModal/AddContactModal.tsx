import React, { FC, useEffect, useMemo, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useAction, useSelector } from "@/store";
import arraySort from "array-sort";
import { Filter } from "./Filter";
import { AddContactList } from "./AddContactList";
import { ListOfContactsToBeAdded } from "./ListOfContactsToBeAdded";
import { Contact } from "@continuapro/entity";
import { useHandleResponse } from "@/hooks";

interface AddContactModalProps {
  isDisabled: boolean;
  segmentId: number;
}

export const AddContactModal: FC<AddContactModalProps> = ({ isDisabled, segmentId }) => {
  const { filterContacts, addContactToSegment } = useAction();
  const { isLoading } = useSelector(({ contactSegments }) => contactSegments.addContactToSegment);

  const { contactSegment } = useSelector(({ contactSegments }) => contactSegments);
  const { contactsFiltered } = useSelector(({ contacts }) => contacts);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResponse = useHandleResponse();

  const [filterActive, setFilterActive] = useState(false);
  const [contactsToAdd, setContactsToAdd] = useState<Contact[]>([]);

  const contactsList = useMemo(() => {
    let contactsList: Contact[] = [];
    if (contactSegment?.contacts.length) {
      const contactIds = contactSegment.contacts.map((contact) => contact.id);
      contactsList = arraySort(
        contactsFiltered.contacts.filter((contact) => !contactIds.includes(contact.id)),
        "name"
      );
    } else {
      contactsList = contactsFiltered.contacts;
    }

    contactsList = contactsList.filter((contact) => !contactsToAdd.includes(contact));

    return contactsList;
  }, [contactSegment, contactsFiltered, contactsToAdd]);

  function newContactToAdd(contact: Contact[]) {
    setContactsToAdd((prev) => [...prev, ...contact]);
  }

  function removeContactToAdd(contact: Contact) {
    setContactsToAdd((prev) => prev.filter((c) => c.id !== contact.id));
  }

  async function addContactsToSegment() {
    const response = await addContactToSegment({
      contact_ids: contactsToAdd.map((contact) => contact.id),
      id: segmentId,
    });

    handleResponse(response, () => {
      onClose();
      setContactsToAdd([]);
    });
  }

  useEffect(() => {
    if (isOpen) filterContacts({ conditions: [] });
  }, [isOpen]);

  return (
    <>
      <Button colorScheme="primary" size="sm" onClick={onOpen} isDisabled={isDisabled}>
        Agregar contactos
      </Button>

      <Modal size="3xl" scrollBehavior="inside" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Seleccionar contactos</ModalHeader>
          <ModalBody>
            {filterActive ? (
              <Filter segmentId={segmentId} setFilterActive={setFilterActive} />
            ) : (
              <Flex>
                <AddContactList segmentId={1} contactsList={contactsList} newContactToAdd={newContactToAdd} />
                <ListOfContactsToBeAdded contacts={contactsToAdd} removeContactToAdd={removeContactToAdd} />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button onClick={() => setFilterActive(!filterActive)}>
              {filterActive ? "Ocultar" : "Mostrar"} filtros
            </Button>
            <HStack>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cerrar
              </Button>
              <Button
                colorScheme="primary"
                // form="add-contact-to-segment"
                // type="submit"
                isLoading={isLoading}
                loadingText="Agregando..."
                isDisabled={contactsToAdd.length === 0}
                onClick={addContactsToSegment}
              >
                Agregar contactos
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
