import { Card, CardContainer, Select } from "@/components";
import { FormProvider } from "@/providers";
import { useAction, useSelector } from "@/store";
import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const AdministrativeReportsTemplate = () => {
  const [optionSelected, setOptionSelected] = useState(null);
  const { getCustomerReports } = useAction();
  const { customerReports } = useSelector((store) => store.customerReports);

  function handleDownload() {
    console.log(optionSelected);
  }

  useEffect(() => {
    getCustomerReports();
  }, []);

  return (
    <div>
      <FormProvider
        id="form-report"
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        <Card>
          <CardContainer>
            <Text mb="2" fontSize="lg" fontWeight="medium">
              Seleccione una opción para elaborar el reporte
            </Text>
            <HStack maxW="35rem">
              <Select
                options={customerReports.map((customerReport) => ({
                  label: customerReport.reportable_module_name,
                  value: customerReport.id,
                }))}
                name="report"
                onChange={(newValue) => setOptionSelected(newValue)}
              />
              <Button colorScheme="primary" isDisabled={!optionSelected} onClick={handleDownload}>
                Descargar
              </Button>
            </HStack>
          </CardContainer>
        </Card>
      </FormProvider>
    </div>
  );
};
