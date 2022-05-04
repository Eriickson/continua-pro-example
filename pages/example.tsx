import React from "react";

import { NextPage } from "next";

import { FormProvider, InputFileUploadControl } from "@/components";
import { Box, Button } from "@chakra-ui/react";

const ExamplePage: NextPage = () => {
  return (
    <Box m="24">
      <FormProvider
        id="example"
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <InputFileUploadControl formControl={{ label: "Archivo 1" }} name="file" inputProps={{ mb: "2" }} />
        <Button form="example" type="submit">
          Enviar
        </Button>
      </FormProvider>
    </Box>
  );
};

export default ExamplePage;
