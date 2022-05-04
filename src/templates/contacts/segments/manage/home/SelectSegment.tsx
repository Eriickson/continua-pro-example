import React, { FC, useEffect, useMemo, useState } from "react";

import { Box, Flex, HStack, IconButton, Stack } from "@chakra-ui/react";

import { Edit } from "react-feather";

import { FormProvider, Card, CardContainer, InputSelectControl } from "@/components";
import { useAction, useSelector } from "@/store";
import { ContactSegment } from "@/types";

import { CreateOrUpdateSegment } from "./createOrUpdateSegment";
import { AddContactModal } from "./addContactModal/AddContactModal";
import { DeleteSegment } from "./DeleteSegment";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface SelectSegmentProps {}

export const SelectSegment: FC<SelectSegmentProps> = () => {
  const { getContactSegment } = useAction();
  const { contactSegments } = useSelector(({ contactSegments }) => contactSegments);
  const { isLoading } = useSelector(({ contactSegments }) => contactSegments.getContactSegments);
  const { data: updateContactSegmentData } = useSelector(({ contactSegments }) => contactSegments.updateContactSegment);
  const [methods, setMethods] = useState<UseFormReturn<FieldValues, object>>();
  const [segmentSelected, setSegmentSelected] = useState<ContactSegment>();

  const getSelectOptions = (data: Array<any> = [], label: string, value: string) => {
    const newData = data.map((item) => ({ label: item[label], value: item[value] }));
    return newData || data;
  };

  const contactSegmentsOptions = useMemo(() => getSelectOptions(contactSegments, "name", "id"), [contactSegments]);

  useEffect(() => {
    if (updateContactSegmentData) {
      const { id, name } = updateContactSegmentData;
      methods?.setValue("segment", { label: name, value: id } as Option);
    }
  }, [updateContactSegmentData]);

  return (
    <Card>
      <CardContainer>
        <FormProvider onSubmit={() => {}} id="" setMethods={setMethods}>
          <Stack>
            <HStack alignItems="flex-end">
              <Box flex="1">
                <InputSelectControl
                  formControl={{ label: "Seleccione un segmento" }}
                  name="segment"
                  options={contactSegmentsOptions}
                  selectProps={{
                    isLoading,
                    onChange: ({ value, label }) => {
                      getContactSegment({ id: Number(value) });
                      setSegmentSelected({ id: Number(value), name: label, contacts: [] });
                    },
                  }}
                />
              </Box>
              <CreateOrUpdateSegment
                type="UPDATE"
                defaultValues={segmentSelected}
                isDisabled={!segmentSelected}
                button={
                  <IconButton
                    _focus={{}}
                    rounded="sm"
                    colorScheme="primary"
                    aria-label="edit-segment"
                    icon={<Edit size="1.25rem" />}
                    isDisabled={!segmentSelected}
                  />
                }
              />
            </HStack>
            <Flex justifyContent="space-between">
              <DeleteSegment
                id={segmentSelected?.id || 0}
                resetForm={() => {
                  methods?.setValue("segment", null);
                  setSegmentSelected(undefined);
                }}
              />
              <AddContactModal isDisabled={!segmentSelected} segmentId={segmentSelected?.id || 0} />
            </Flex>
          </Stack>
        </FormProvider>
      </CardContainer>
    </Card>
  );
};
