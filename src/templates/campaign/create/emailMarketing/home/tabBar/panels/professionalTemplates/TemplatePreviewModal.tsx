import React, { FC } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Box,
  GridItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import { Card, CardContainer } from "@/components";
import { useRouter } from "next/router";
import { CampaignTemplate } from "@continuapro/entity";
import { useAction } from "@/store";
import { useHandleResponse } from "@/hooks";

interface TemplatePreviewModalProps {
  campaignTemplate: CampaignTemplate;
}

export const TemplatePreviewModal: FC<TemplatePreviewModalProps> = ({ campaignTemplate }) => {
  const { createCampaign } = useAction();
  const { push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResponse = useHandleResponse();

  async function generateCampaign() {
    const response: any = await createCampaign({
      campaignType: "mailing",
      campaign: { campaign_template_id: campaignTemplate.id, category: 0 },
    });

    handleResponse(response, () => push(`/campaigns/mailing/${response.payload.data.data.id}/settings-view`));
  }

  return (
    <GridItem colSpan={4}>
      <Card height="full" onClick={onOpen}>
        <Flex height="full" alignItems="center" overflow="hidden" pos="relative">
          <CardContainer>
            <Box>{parse(campaignTemplate.content || "")}</Box>
            <Box
              cursor="pointer"
              pos="absolute"
              inset="0"
              transition="400ms"
              _hover={{ bgColor: "black", opacity: 0.5, transition: "400ms" }}
            ></Box>
          </CardContainer>
        </Flex>
      </Card>

      <Modal isCentered isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text lineHeight="none">{campaignTemplate.name}</Text>
            <Text fontSize="md">{campaignTemplate.description}</Text>
          </ModalHeader>
          <ModalBody>
            <Box pos="relative">
              <Box>{parse(campaignTemplate.content || "")}</Box>
              <Box cursor="pointer" pos="absolute" inset="0"></Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme="primary" onClick={generateCampaign}>
              Seleccionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </GridItem>
  );
};
