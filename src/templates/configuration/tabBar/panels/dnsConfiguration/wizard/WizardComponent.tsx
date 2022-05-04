import { Wizard, WizardProvider, WizardStep } from "@/components";
import React, { useState } from "react";
import { Step1 } from "./panels/Step1/Step1";
import { Step2 } from "./panels/Step2/Step2";
import { Step3 } from "./panels/Step3/Step3";

export const WizardComponent = () => {
  const [steps] = useState<WizardStep[]>([
    {
      title: "Paso 1",
      subtile: "Entra a tu dominio",
      component: Step1,
    },
    {
      title: "Paso 2",
      subtile: "Entra a tu dominio",
      component: Step2,
    },
    {
      title: "Paso 3",
      subtile: "Entra a tu dominio",
      component: Step3,
    },
  ]);

  return (
    <div>
      <WizardProvider steps={steps}>
        <Wizard />
      </WizardProvider>
    </div>
  );
};
