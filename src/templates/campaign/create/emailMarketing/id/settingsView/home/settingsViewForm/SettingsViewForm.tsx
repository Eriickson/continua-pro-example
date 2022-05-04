import React, { FC } from "react";

import { Box, HStack, Stack, VStack } from "@chakra-ui/react";

import { useDebouncedCallback } from "use-debounce";

import { FromModal, InputControl, InputSelectControl } from "@/components";
import { FormProvider } from "@/providers";
import { useSelector } from "@/store";

import { SelectSendDateTime } from "./selectSendDateTime/SelectSendDateTime";
import { CampaignSumary } from "@continuapro/entity";
import { SendTest } from "./sendTest";
import { SendCampaign } from "./sendCampaign";

export interface SettingsViewFormProps {
  onChange(newValue: any): void;
}

export const SettingsViewForm: FC<SettingsViewFormProps> = ({ onChange }) => {
  const { contactSegments } = useSelector(({ contactSegments }) => contactSegments);
  const { isLoading } = useSelector(({ contactSegments }) => contactSegments.getContactSegments);
  const { campaign } = useSelector(({ campaigns }) => campaigns.mailing);
  const debounced = useDebouncedCallback((value) => onChange(value), 1000);

  return (
    <Stack>
      <Box>
        <FormProvider
          id="campaign"
          onSubmit={() => {}}
          defaultValues={
            {
              name: campaign?.sumary.name,
              description: campaign?.sumary.description,
              to: campaign?.sumary?.contact_segment?.id,
              subject: campaign?.sumary.subject,
              from: campaign?.sumary.sender?.name,
              sendDateTime: campaign?.sumary.schedule?.scheduled_at,
              time_zone: campaign?.sumary.schedule?.scheduling_timezone,
            } as Partial<CampaignSumary>
          }
        >
          <VStack alignItems="stretch">
            <InputControl
              formControl={{ label: "Nombre" }}
              name="name"
              inputProps={{ onChange: (e) => debounced({ name: e.target.value }) }}
            />
            <InputControl
              formControl={{ label: "Descripción" }}
              name="description"
              inputProps={{ onChange: (e) => debounced({ description: e.target.value }) }}
            />
            <InputSelectControl
              formControl={{ label: "To" }}
              name="to"
              options={contactSegments.map((item) => ({ label: item.name, value: item.id }))}
              selectProps={{ isLoading, onChange: ({ value }) => onChange({ contact_segment_id: value }) }}
            />
            <FromModal onSelected={({ id }) => onChange({ sender_id: id })} />
            <InputControl
              formControl={{ label: "Subject", helperText: "Máx. 150 Caracteres" }}
              name="subject"
              inputProps={{ onChange: (e) => debounced({ subject: e.target.value }) }}
            />
            <SelectSendDateTime />
          </VStack>
        </FormProvider>
      </Box>
      <HStack justifyContent="flex-end">
        <SendTest />
        <SendCampaign />
      </HStack>
    </Stack>
  );
};
