import React, { FC, useEffect, useMemo, useState } from "react";

import { Box, HStack, IconButton } from "@chakra-ui/react";

import { Edit, Save, X } from "react-feather";
import { useSelector } from "@/store";
import { Input, InputSelect } from "@/components";
import { useFormContext } from "react-hook-form";

interface UpdateCreditPlanFormProps {}

export const UpdateCreditPlanForm: FC<UpdateCreditPlanFormProps> = () => {
  const { channels } = useSelector(({ channels }) => channels);
  const { creditPlan } = useSelector(({ creditPlans }) => creditPlans);
  const { isLoading } = useSelector(({ creditPlans }) => creditPlans.updateCreditPlan);

  const { setFocus, resetField } = useFormContext();

  const channelsOptions = useMemo(() => channels.map(({ id, name }) => ({ label: name, value: id })), [channels]);

  const [isEditting, setIsEditting] = useState(false);

  useEffect(() => {
    isEditting && setFocus("name");
  }, [isEditting]);

  useEffect(() => {
    creditPlan && setIsEditting(false);
  }, [creditPlan]);

  return (
    <HStack spacing="0.5">
      <HStack>
        <Input name="name" inputProps={{ width: "64", isDisabled: !isEditting }} />
        <Box w="64">
          <InputSelect name="channel" options={channelsOptions} selectProps={{ isDisabled: !isEditting }} />
        </Box>
      </HStack>

      {isEditting ? (
        <>
          <IconButton
            rounded="sm"
            variant="outline"
            colorScheme="red"
            _focus={{}}
            aria-label="Cancelar Edición"
            icon={<X size="1.25rem" />}
            onClick={() => {
              resetField("name");
              setIsEditting(false);
            }}
            isDisabled={isLoading}
          />
          <IconButton
            rounded="sm"
            variant="outline"
            colorScheme="primary"
            _focus={{}}
            aria-label="Guardar nombre"
            icon={<Save size="1.25rem" />}
            type="submit"
            form="update-credit-plan-form"
            isLoading={isLoading}
          />
        </>
      ) : (
        <IconButton
          rounded="sm"
          colorScheme="blue"
          _focus={{}}
          aria-label="Editar nombre"
          icon={<Edit size="1.25rem" />}
          onClick={() => setIsEditting(true)}
        />
      )}
    </HStack>
  );
};
