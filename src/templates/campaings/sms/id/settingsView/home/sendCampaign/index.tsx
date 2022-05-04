import { Modal } from "@/components";
import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { Box, Button, ListItem, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const SendCampaign = () => {
  const { validateSynchronizationCampaign, saveAndSendCampaign } = useAction();

  const { query } = useRouter();

  const [error, setError] = useState<{ errors: string[]; message: string }>({ message: "", errors: [] });

  const disclosure = useDisclosure();

  const handleResponse = useHandleResponse();

  async function handleValidateSynchronizationCampaign() {
    const response: any = await validateSynchronizationCampaign({ campaignType: "sms", id: Number(query.id) });

    if (response?.payload?.data.data.errors.length) {
      setError({ errors: response.payload.data.data.errors, message: response.payload.data.message });
      disclosure.onOpen();
      handleResponse(response);
      return;
    } else sendCampaign();
  }

  async function sendCampaign() {
    const response = await saveAndSendCampaign({ campaignType: "sms", id: Number(query.id) });

    handleResponse(response, () => disclosure.onClose());
  }

  return (
    <Box>
      <Button type="button" colorScheme="primary" onClick={handleValidateSynchronizationCampaign}>
        Enviar Campaña
      </Button>
      <Modal
        modalProps={{ size: "2xl" }}
        {...disclosure}
        title={error.message}
        customButton={<></>}
        btnPri={{ colorScheme: "orange", label: "Enviar de todos modos", onClick: sendCampaign }}
        btnSec={{ colorScheme: "gray", label: "Cancelar" }}
        titleColor="orange.600"
      >
        <UnorderedList>
          {error.errors.map((error) => (
            <ListItem fontSize="sm" fontWeight="medium" key={error}>
              {error}
            </ListItem>
          ))}
        </UnorderedList>
      </Modal>
    </Box>
  );
};
