import React from "react";

import { FormProvider } from "@/providers";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { InputMaskControl, RadioGroup, Select } from "@/components";

export const CreateReportForm = () => {
  // const { data: channels, isLoading } = useSelector((store) => store.channels);

  return (
    <FormProvider id="create-report-form" onSubmit={(values) => console.log(values)}>
      <SimpleGrid columns={12} gap={5}>
        <GridItem colSpan={6}>
          <InputMaskControl
            formControl={{ label: "Fecha y hora de inicio" }}
            inputProps={{ placeholder: "DD/MM/AAAA HH:MM" }}
            name="datetimeTo"
            mask="99/99/9999 99:99"
          />
        </GridItem>
        <GridItem colSpan={6}>
          <InputMaskControl
            formControl={{ label: "Fecha y hora de fin" }}
            inputProps={{ placeholder: "DD/MM/AAAA HH:MM" }}
            name="datetimeFrom"
            mask="99/99/9999 99:99"
          />
        </GridItem>
        <GridItem colSpan={6}>
          <Select name="status" label="Estatus de mensajes" options={[]} />
        </GridItem>
        <GridItem colSpan={6}>
          <Select name="campaigns" label="Campaña" options={[]} />
        </GridItem>
        <GridItem colSpan={12}>
          <RadioGroup
            label="Selecciona uno más canales"
            name="channel"
            // items={channels.map((channel) => ({
            //   label: channel.name,
            //   value: channel.id,
            // }))}
            items={[]}
          />
        </GridItem>
      </SimpleGrid>
    </FormProvider>
  );
};
