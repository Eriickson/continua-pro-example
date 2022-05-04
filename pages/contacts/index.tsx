import { MainContainer, SEO } from "@/components";
import { NextPage } from "next";
import React from "react";
import { ContactsListTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const ContactsListPage: NextPage = () => {
  return (
    <>
      <SEO title="Listado de Contactos" />
      <MainContainer>
        <ContactsListTemplate />
      </MainContainer>
    </>
  );
};

export default withAuth(ContactsListPage);
