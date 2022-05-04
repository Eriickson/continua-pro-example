import { AlertDialog } from "@/components";
import { usePlanManager } from "@/contexts";
import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

interface DeletePlanProps {
  id: number;
  onClick(): void;
}

export const DeletePlan: FC<DeletePlanProps> = ({ id, onClick }) => {
  const { deletePlan } = usePlanManager();

  return (
    <>
      <AlertDialog
        title="Eliminar Plan"
        btnPri={{
          colorSchema: "red",
          label: "Sí, Eliminar",
          onClick: () => {
            deletePlan(id);
            onClick();
          },
        }}
        button={
          <Button mr={3} colorScheme="red" variant="ghost">
            Eliminar
          </Button>
        }
      />
    </>
  );
};
