import { Card, CardContainer } from "@/components";
import { useAction } from "@/store";
import { Button, HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CreateAutomatizationWizard } from "./wizard/CreateAutomatizationWizard";

export const CreateAutomatizationTemplate = () => {
  const { getContactSegments } = useAction();

  useEffect(() => {
    getContactSegments();
  }, []);

  return (
    <div>
      <Card>
        <CardContainer>
          <HStack>
            <Button colorScheme="primary">Cancelar</Button>
          </HStack>
        </CardContainer>
      </Card>
      <CreateAutomatizationWizard />
    </div>
  );
};
