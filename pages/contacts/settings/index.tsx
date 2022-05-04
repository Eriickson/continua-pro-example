import React from "react";

import { NextPage } from "next";

import { ContactsSettingsTemplate } from "@/templates";

import { MainContainer, SEO } from "@/components";
import { withAuth } from "@/hocs";

const ContactsSettingsPage: NextPage = () => {
  return (
    <>
      <SEO title="Configuración de atributos" />
      <MainContainer>
        <ContactsSettingsTemplate />
      </MainContainer>
    </>
  );
};

export default withAuth(ContactsSettingsPage);
