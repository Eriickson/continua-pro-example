import { Card, CardContainer } from "@/components";
import { OnChangeInput } from "@continuapro/events";
import React from "react";
import { PersonalizationPanelForm } from "./PersonalizationPanelForm";

export const PersonalizationPanel = () => {
  async function handleChangeInput(newValue: OnChangeInput) {
    console.log(newValue);
  }

  return (
    <Card>
      <CardContainer>
        <PersonalizationPanelForm onChangeField={handleChangeInput} />
      </CardContainer>
    </Card>
  );
};
