import { FormProvider } from "@/providers";
import React, { FC, useState } from "react";
import { WeekDaysSelect } from "../WeekDaysSelect";
import { Box, FormControl, FormLabel, HStack, Text, VStack } from "@chakra-ui/react";
import { InputMaskControl } from "@/components";

const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

interface ScheduleFormProps {
  onSubmit(values: any): void;
}

export const ScheduleForm: FC<ScheduleFormProps> = ({ onSubmit }) => {
  const [startDay, setStartDay] = useState(0);
  const [endDay, setEndDay] = useState(6);

  return (
    <FormProvider
      id="create-schedule-form"
      onSubmit={(values) => onSubmit({ ...values, start_day: startDay, end_day: endDay })}
    >
      <VStack alignItems="stretch">
        <FormControl>
          <FormLabel color="gray.700" ml="0.5" fontSize="sm" mb="0.5" userSelect="none">
            Día Inicial
          </FormLabel>
          <WeekDaysSelect
            items={weekDays}
            name="start"
            defaultValue="Lunes"
            onChange={(e) => {
              setStartDay(weekDays.indexOf(e));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="gray.700" ml="0.5" fontSize="sm" mb="0.5" userSelect="none">
            Día Final
          </FormLabel>

          <WeekDaysSelect
            items={startDay === 0 ? weekDays : [...weekDays].splice(startDay, weekDays.length - 1)}
            name="start"
            onChange={(e) => {
              setEndDay(weekDays.indexOf(e));
            }}
          />
        </FormControl>
        <HStack alignItems="center">
          <InputMaskControl
            formControl={{ label: "Hora inicio" }}
            name="start_time"
            mask="99:99"
            inputProps={{ width: "28" }}
          />
          <Box pt="5">
            <Text fontWeight="bold">-</Text>
          </Box>
          <InputMaskControl
            formControl={{ label: "Hora fin" }}
            name="end_time"
            mask="99:99"
            inputProps={{ width: "28" }}
          />
        </HStack>
      </VStack>
    </FormProvider>
  );
};
