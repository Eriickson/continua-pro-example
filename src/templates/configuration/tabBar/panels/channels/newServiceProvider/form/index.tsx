import React, { FC, useMemo } from "react";

import { NewServiceProviderFormProps } from "@continuapro/form";

import { Stack } from "@chakra-ui/react";

import { useSelector } from "@/store";

import { FormProvider, InputControl, InputSelectControl } from "@/components";
import { getFormId } from "@/utils";

export const NewServiceProviderForm: FC<NewServiceProviderFormProps> = ({ onSubmit }) => {
  const { channels } = useSelector(({ channels }) => channels);

  const channelsOptions = useMemo<Option[]>(() => channels.map(({ id, name }) => ({ label: name, value: id })), []);
  return (
    <FormProvider id={getFormId(NewServiceProviderForm)} onSubmit={onSubmit}>
      <Stack>
        <InputControl rules={{ required: true }} formControl={{ label: "Nombre" }} name="name" />
        <InputControl rules={{ required: true }} formControl={{ label: "Host" }} name="serviceHost" />
        <InputControl rules={{ required: true }} formControl={{ label: "Tipo de Gateway" }} name="serviceGatewayType" />
        <InputSelectControl
          rules={{ required: true }}
          formControl={{ label: "Canal" }}
          name="channelId"
          options={channelsOptions}
        />
      </Stack>
    </FormProvider>
  );
};
