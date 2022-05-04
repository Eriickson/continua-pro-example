import React, { FC } from "react";

import { FormProvider, FromModal, InputControl, InputSelectControl } from "@/components";
import { Stack } from "@chakra-ui/react";
import { useSelector } from "@/store";
import { useDebouncedCallback } from "use-debounce";
import { SetSmsMessageModal } from "../setSmsMessage/SetSmsMessageModal";
import { SelectSendDateTime } from "./selectSendDateTime/SelectSendDateTime";

interface SmsCampaignSettingsViewFormProps {
  onChange(newValue: any): void;
}

export const SmsCampaignSettingsViewForm: FC<SmsCampaignSettingsViewFormProps> = ({ onChange }) => {
  const { contactSegments } = useSelector(({ contactSegments }) => contactSegments);
  const { isLoading } = useSelector(({ contactSegments }) => contactSegments.getContactSegments);
  const { campaign } = useSelector(({ campaigns }) => campaigns.sms);

  const debounced = useDebouncedCallback((value) => onChange(value), 1000);

  return (
    <div>
      <FormProvider
        id=""
        onSubmit={() => {}}
        defaultValues={{
          name: campaign?.name,
          description: campaign?.description,
          to: campaign?.contact_segment?.id,
          from: campaign?.sender?.name,
        }}
      >
        <Stack>
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
          <SetSmsMessageModal />
          <SelectSendDateTime />
        </Stack>
      </FormProvider>
    </div>
  );
};
