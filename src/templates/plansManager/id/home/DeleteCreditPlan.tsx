import { AlertDialog } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const DeleteCreditPlan = () => {
  const { deleteCreditPlan } = useAction();
  const { query, push } = useRouter();

  const handleResponse = useHandleResponse();

  async function handleDelete() {
    const response = await deleteCreditPlan({ id: Number(query.id) });

    handleResponse(response, () => push("/plans-manager"));
  }

  return (
    <AlertDialog
      title="Eliminar Plan"
      btnPri={{ colorSchema: "red", label: "Eliminar", onClick: handleDelete }}
      button={<Button colorScheme="red">Eliminar</Button>}
    />
  );
};
