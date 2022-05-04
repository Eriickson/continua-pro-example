import { Box, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "@/store";
import { ScheduleModal } from "./scheduleModal/ScheduleModal";

const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export const Schedule = () => {
  const { notificationSchedules } = useSelector(({ notificationSchedules }) => notificationSchedules);

  return (
    <GridItem colSpan={6}>
      <Stack>
        <Box>
          <Text lineHeight="none" fontWeight="medium">
            Horarios
          </Text>
          <Text fontSize="sm" fontWeight="light" color="gray.800">
            Habilitados para envío de campañas
          </Text>
        </Box>

        {notificationSchedules.length === 0 ? (
          <Text w="max-content" py="2" px="5" fontWeight="medium" bgColor="gray.100" color="gray.700">
            No hay datos para mostrar
          </Text>
        ) : (
          notificationSchedules?.map((notificationSchedule, i) => (
            <HStack key={notificationSchedule.id}>
              <Text
                border="1px"
                w="48"
                textAlign="center"
                px="3"
                py="1.5"
                borderRadius="sm"
                borderColor="gray.300"
                userSelect="none"
                fontWeight="semibold"
                color="gray.700"
                bgColor="gray.50"
              >
                {weekDays[notificationSchedule.start_day]} - {weekDays[notificationSchedule.end_day]}
              </Text>
              {notificationSchedule.start_time && (
                <Text
                  border="1px"
                  w="max-content"
                  px="3"
                  py="1.5"
                  borderRadius="sm"
                  borderColor="gray.300"
                  userSelect="none"
                  fontWeight="semibold"
                  color="gray.700"
                  bgColor="gray.50"
                >
                  {notificationSchedule.start_time}
                  {notificationSchedule.end_time && ` - ${notificationSchedule.end_time}`}
                </Text>
              )}
            </HStack>
          ))
        )}
        <ScheduleModal />
      </Stack>
    </GridItem>
  );
};
