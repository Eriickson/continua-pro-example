import React from "react";
import { Stack } from "@chakra-ui/react";

import { FormProvider, FromModal } from "@/components";

import { FieldTo } from "./FieldTo";
import { SetSmsMessageModal } from "../setSmsMessage/SetSmsMessageModal";

export const CreateCampaingForm = () => {
  return (
    <div>
      <FormProvider id="" onSubmit={() => {}}>
        <Stack>
          <FieldTo />
          <FromModal
            onSelected={(value) => {
              console.log(value);
            }}
          />
          <SetSmsMessageModal />
        </Stack>
      </FormProvider>
    </div>
  );
};
