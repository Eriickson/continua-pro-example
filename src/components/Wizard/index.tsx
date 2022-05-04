import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { CircleStep } from "./CircleStep";
import { useWizard } from "./context/WizardContext";

interface WizardProps {
  // steps: WizardStep[];
}

export const Wizard: FC<WizardProps> = () => {
  const { internalSteps, currentStep, nextStep, prevStep, goToStep } = useWizard();

  return (
    <div>
      <Stack spacing={5}>
        <Flex alignItems="center" justifyContent="space-between">
          {internalSteps.map((step, index) => (
            <CircleStep
              key={index}
              label={index + 1}
              title={step.title}
              subtile={step.subtile}
              isCompleted={index < currentStep}
              isCurrent={index === currentStep}
            />
          ))}
        </Flex>
        <Box>
          {internalSteps.map((step, index) => (
            <Box key={index}>
              {currentStep === index && (
                <step.component currentStep={currentStep} prevStep={prevStep} nextStep={nextStep} goToStep={goToStep} />
              )}
            </Box>
          ))}
        </Box>
      </Stack>
    </div>
  );
};
