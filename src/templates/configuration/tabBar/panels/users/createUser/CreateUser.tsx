import React from "react";

import { Button } from "@chakra-ui/react";

import { AddUserIcon } from "@/assets";

import { CreateOrUpdateUser } from "../createOrUpdateUser";

export const CreateUser = () => {
  return (
    <>
      <CreateOrUpdateUser
        type="CREATE"
        button={
          <Button fontSize="sm" colorScheme="primary" leftIcon={<AddUserIcon color="white" />}>
            Crear Usuario
          </Button>
        }
      />
    </>
  );
};
