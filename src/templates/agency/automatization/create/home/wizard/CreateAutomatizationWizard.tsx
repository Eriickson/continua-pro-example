import { Wizard, WizardProvider } from "@/components";
import React from "react";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";

export const CreateAutomatizationWizard = () => {
  return (
    <div>
      <WizardProvider
        steps={[
          {
            component: Step1,
            subtile: "Selecciona tus Contactos",
            title: "Paso 1",
          },
          {
            component: Step2,
            subtile: "Describe tu Automatización",
            title: "Paso 2",
          },
          {
            component: Step3,
            subtile: "Define un Objetivo",
            title: "Paso 3",
          },
          {
            component: Step4,
            subtile: "Configura el flujo",
            title: "Paso 4",
          },
        ]}
      >
        <Wizard />
      </WizardProvider>
    </div>
  );
};
