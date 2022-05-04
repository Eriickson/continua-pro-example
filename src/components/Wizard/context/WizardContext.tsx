import React, { createContext, Context, useState, FC, useContext } from "react";

interface IWizardContext {
  currentStep: number;
  internalSteps: WizardStep[];
  nextStep(): void;
  prevStep(): void;
  goToStep(step: number): void;
}

export interface WizardStepProps {
  currentStep: number;
  nextStep(): void;
  prevStep(): void;
  goToStep(step: number): void;
}

export interface WizardStep {
  title?: string;
  subtile?: string;
  component: FC<WizardStepProps>;
}
const WizardContext = createContext<IWizardContext | null>(null) as Context<IWizardContext>;

interface WizardProviderProps {
  defaultStep?: number;
  steps: WizardStep[];
}

const WizardProvider: FC<WizardProviderProps> = ({ children, steps, defaultStep }) => {
  const [currentStep, setCurrentStep] = useState(defaultStep || 0);
  const [internalSteps] = useState(steps);

  function nextStep() {
    setCurrentStep((prev) => prev + 1);
  }

  function prevStep() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }

  function goToStep(step: number) {
    setCurrentStep(step);
  }

  return (
    <WizardContext.Provider value={{ internalSteps, currentStep, nextStep, prevStep, goToStep }}>
      {children}
    </WizardContext.Provider>
  );
};

const useWizard = () => useContext(WizardContext);

export { useWizard, WizardProvider };
