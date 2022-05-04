import React from "react";

import { Card, CardContainer } from "@/components";
import { useAction } from "@/store";

import { GeneralPanelForm } from "./GeneralPanelForm";
import { useHandleResponse } from "@/hooks";

export const AccountDetailPanel = () => {
  const { updateSystemSetting } = useAction();

  const handleResponse = useHandleResponse();

  async function handleOnChangeField({ id, value }: any) {
    const response = await updateSystemSetting({ id, system_setting: { value } });

    handleResponse(response);
  }

  return (
    <Card>
      <CardContainer>
        <GeneralPanelForm onChangeField={handleOnChangeField} />
      </CardContainer>
    </Card>
  );
};
