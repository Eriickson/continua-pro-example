import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
  Text,
  Box,
  Divider,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { FormProvider } from "@/providers";
import { InputControl, InputSelectControl } from "@/components";
import { useAction, useSelector } from "@/store";
import { useRouter } from "next/router";
import moment from "moment";
import { useHandleResponse } from "@/hooks";

export const SelectSendDateTime = () => {
  const { getSenders, getTimeZones, updateCampaignSchedule, createCampaignSchedule } = useAction();
  const { isLoading } = useSelector(({ catalogs }) => catalogs.getTimeZones);
  const { timeZones } = useSelector(({ catalogs }) => catalogs);
  const { campaign } = useSelector(({ campaigns }) => campaigns.mailing);
  const [label, setLabel] = useState("Seleccionar");

  const { query } = useRouter();

  const [sendComingSoon, setSendComingSoon] = useState(
    campaign?.sumary?.schedule?.scheduling_type === "as_soon_as_possible"
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = useHandleResponse();

  async function handlerSubmit(values: any) {
    const { sendDateTime, time_zone } = values;
    const campaignSchedule = { campaign_id: Number(query.id) };

    if (sendComingSoon) {
      Object.assign(campaignSchedule, { scheduling_type: 0 });
    } else {
      Object.assign(campaignSchedule, {
        scheduled_at: moment(sendDateTime).format("YYYY-MM-DD HH:mm:ss"),
        scheduling_type: 1,
        scheduling_timezone: time_zone.value,
      });
    }

    if (!campaign?.sumary.schedule) {
      const response: any = await createCampaignSchedule({ campaignSchedule });
      handleSubmit(response, onClose);
      return;
    }

    const response: any = sendComingSoon
      ? await updateCampaignSchedule({
          id: Number(campaign?.sumary.schedule.id),
          campaignSchedule: { scheduling_type: 0 },
        })
      : await updateCampaignSchedule({
          id: Number((campaign?.sumary.schedule as any).id),
          campaignSchedule,
        });

    handleSubmit(response, () => {
      setLabel(
        sendComingSoon
          ? "Enviar lo antes posible"
          : `${moment(response.payload.data.data.scheduled_at).format("YYYY-MM-DD HH:mm:ss")} - ${
              response.payload.data.data.scheduling_timezone
            }`
      );
      onClose();
    });
  }

  useEffect(() => {
    if (isOpen) {
      getSenders();
      getTimeZones();
    }
  }, [isOpen]);

  useEffect(() => {
    if (campaign?.sumary.schedule) {
      const label =
        campaign.sumary.schedule.scheduling_type === "as_soon_as_possible"
          ? "Enviar lo antes posible"
          : `${moment(campaign?.sumary.schedule.scheduled_at).format("YYYY-MM-DD HH:mm:ss")} - ${
              campaign?.sumary.schedule.scheduling_timezone
            }`;
      setLabel(label);
    }
  }, [campaign]);

  return (
    <div>
      <Box onClick={onOpen} pos="relative">
        <Box cursor="pointer" zIndex={1} pos="absolute" inset="0"></Box>
        <Text fontSize="sm" fontWeight="medium" textColor="gray.700">
          Enviar fecha y hora
        </Text>
        <Box
          cursor="pointer"
          border="1px"
          px="2"
          py="1.5"
          borderRadius="sm"
          borderColor="gray.200"
          onClick={onOpen}
          h="10"
        >
          {label}
        </Box>
      </Box>
      <Modal scrollBehavior="inside" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Heading color="secondary.500" mb="2" fontWeight="medium" fontSize="2xl">
              Seleccionar la fecha de envio
            </Heading>
            <Text lineHeight="none" fontWeight="normal" fontSize="md">
              Especifique cuando esta campaña será enviada
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormProvider id="select-send-datetime-form" onSubmit={handlerSubmit}>
                <RadioGroup
                  name="sendComingSoon"
                  defaultValue={String(sendComingSoon)}
                  onChange={(value) => setSendComingSoon(value === "true")}
                >
                  <Stack>
                    <Radio value="true" defaultChecked={sendComingSoon}>
                      Enviar lo antes posible
                    </Radio>
                    <Radio value="false" defaultChecked={sendComingSoon}>
                      Enviar en una fecha en específico
                    </Radio>
                  </Stack>
                </RadioGroup>
                {!sendComingSoon && (
                  <>
                    <Divider my="3" />
                    <Stack spacing={4}>
                      <InputSelectControl
                        formControl={{ label: "Zona horaria" }}
                        selectProps={{ isLoading }}
                        rules={{ required: true }}
                        name="time_zone"
                        options={timeZones.map((timezone) => ({
                          label: timezone,
                          value: timezone,
                        }))}
                      />
                      <InputControl
                        name="sendDateTime"
                        inputProps={{ type: "datetime-local" }}
                        formControl={{ label: "Fecha y hora de envío" }}
                      />
                    </Stack>
                  </>
                )}
              </FormProvider>
            </Box>
          </ModalBody>

          <ModalFooter flexDir="column" alignItems="flex-end">
            <Button type="submit" colorScheme="primary" form="select-send-datetime-form" loadingText="Guardando...">
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
