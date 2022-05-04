import { FormProvider, InputControl, InputSelectControl } from "@/components";
import { useSelector } from "@/store";
import { getFormId } from "@/utils";
import { Stack } from "@chakra-ui/react";
import { NewPlanFormProps } from "@continuapro/form";
import React, { FC, useMemo } from "react";

export const NewPlaForm: FC<NewPlanFormProps> = ({ onSubmit }) => {
  const { channels } = useSelector(({ channels }) => channels);
  const { isLoading } = useSelector(({ channels }) => channels.getChannels);

  const channelsOptions: Option[] = useMemo(
    () => channels.map(({ name, id }) => ({ label: name, value: id })),
    [channels]
  );

  return (
    <FormProvider id={getFormId(NewPlaForm)} onSubmit={onSubmit}>
      <Stack>
        <InputControl rules={{ required: true }} formControl={{ label: "Nombre" }} name="name" />
        <InputSelectControl
          rules={{ required: true }}
          formControl={{ label: "Canal" }}
          name="channel"
          options={channelsOptions}
          selectProps={{ isLoading }}
        />
      </Stack>
    </FormProvider>
  );
};
