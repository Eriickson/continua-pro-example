import React, { useEffect } from "react";

import { MainContainer } from "@/components";
import { ContactsDetailsTemplate } from "@/templates";
import { useRouter } from "next/router";
import { useAction } from "@/store";
import { withAuth } from "@/hocs";

const ContactDetails = () => {
  const { query } = useRouter();
  const { getContact } = useAction();

  useEffect(() => {
    if (Object.keys(query).length) {
      getContact({ id: Number(query.contactId) });
    }
  }, [query]);

  return (
    <MainContainer>
      <ContactsDetailsTemplate />
    </MainContainer>
  );
};

export default withAuth(ContactDetails);
