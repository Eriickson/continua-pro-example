import React, { createContext, Context, FC, useContext, useState } from "react";
import { useClient, useHandlerEntity, useHandlerTryCatch } from "@/hooks";

import { useUI } from "@/contexts";

interface NewContact {
  name: string;
  email: string;
  phone: string;
}

export interface Contact {
  id: number;
  name: number;
  email: number;
  phone: number;
  status: number;
  segment: number;
  contact_since: Date;
  time_being_contact: string;
  custom_fields: Record<string, number | string>[];
}

export interface ContactSegment {
  id: number;
  name: string;
}

interface IAgencyContext {
  contacts: Contact[];
  contactSegments: ContactSegment[];
  contact: Contact | null;
  createContact(newContact: NewContact): Promise<void>;
  getContacts(): Promise<void>;
  getContactSegments(): Promise<void>;
  getContact(contactId: string): Promise<void>;
  // updateContact(id: number, newValues: Contact): Promise<boolean>;
  deleteContact(contactId: number): Promise<boolean>;
}

const AgencyContext = createContext<IAgencyContext | null>(
  null
) as Context<IAgencyContext>;

const AgencyProvider: FC = ({ children }) => {
  const { setLoadingScreen } = useUI();
  const { client } = useClient();
  const { updateEntity } = useHandlerEntity();

  const { handlerError } = useHandlerTryCatch();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);

  const [contactSegments, setContactSegments] = useState<ContactSegment[]>([]);

  async function createContact(newContact: NewContact) {
    try {
      const { data } = await client.post("/contacts", { contact: newContact });

      if (data.code === 200) {
        console.log(data);
        setContacts([...contacts, data.data]);
        // setContacts(data.data);
        // return;
      }
    } catch (err) {
      handlerError(err);
    }
  }

  async function getContacts() {
    try {
      const { data } = await client.get("/contacts");

      if (data.code === 200) {
        setContacts(data.data);
        return;
      }
    } catch (err) {
      handlerError(err);
    }
  }

  async function getContactSegments() {
    try {
      const { data } = await client.get("/contact_segments");

      if (data.code === 200) {
        setContactSegments(data.data);
        return;
      }
    } catch (err) {
      handlerError(err);
    }
  }

  // async function updateContact(
  //   id: number,
  //   newValue: Contact
  // ): Promise<boolean> {
  //   return updateEntity({
  //     id,
  //     newValues: { contact: newValue },
  //     path: "/contacts/{id}",
  //   });
  // }

  async function getContact(contactId?: string) {
    try {
      const { data } = await client.get(`/contacts/${contactId}`);

      if (data.code === 200) {
        setContact(data.data);
        return;
      }
    } catch (err) {
      handlerError(err);
    }
  }

  async function deleteContact(contactId: number): Promise<boolean> {
    setLoadingScreen({ isLoading: true, label: "Eliminando Contacto..." });
    try {
      const { data } = await client.delete(`/contacts/${contactId}`);
      if (data.code === 200) {
        console.log("Contacto Eliminado");

        return true;
      }
    } catch (err: any) {
      handlerError(err);
    }
    return false;
  }

  return (
    <AgencyContext.Provider
      value={{
        contact,
        contacts,
        contactSegments,
        createContact,
        getContacts,
        getContactSegments,
        getContact,
        // updateContact,
        deleteContact,
      }}
    >
      {children}
    </AgencyContext.Provider>
  );
};

const useAgency = () => useContext(AgencyContext);

export { useAgency, AgencyProvider };
