import { FormProvider } from "@/providers";
import React from "react";
import { useAction } from "@/store";
import { Box, IconButton, Table, Tbody, Td, Tooltip, Tr } from "@chakra-ui/react";
import { InputControl, RadioGroup } from "@/components";
import { Hash, Save, Type } from "react-feather";

export const CreatePersonalizedAttribute = () => {
  const { createPersonalizedAttribute } = useAction();
  return (
    <FormProvider
      id="add-personalized-attributes-form"
      onSubmit={(personalized_attribute, { reset }) => {
        createPersonalizedAttribute({ personalized_attribute });
        reset();
      }}
    >
      <Table>
        <Tbody>
          <Tr>
            <Td border="none" pl={0}>
              <InputControl name="name" inputProps={{ placeholder: "Ej: xyz" }} />
            </Td>
            <Td border="none" pl={0}>
              <RadioGroup
                name="data_type"
                defaultValue="string"
                items={[
                  {
                    value: "string",
                    label: (
                      <Tooltip bg="secondary.100" hasArrow placement="top" label="String" color="secondary.600">
                        <Box bgColor="primary.500" p="1.5" rounded="base" color="white">
                          <Type size="1rem" strokeWidth="3" />
                        </Box>
                      </Tooltip>
                    ),
                  },
                  {
                    value: "number",
                    label: (
                      <Tooltip bg="secondary.100" hasArrow placement="top" label="Number" color="secondary.600">
                        <Box bgColor="primary.500" p="1.5" rounded="base" color="white">
                          <Hash size="1rem" strokeWidth="3" />
                        </Box>
                      </Tooltip>
                    ),
                  },
                ]}
              />
            </Td>
            <Td border="none" w="12" isNumeric p="2"></Td>
            <Td border="none" w="5" p="2" isNumeric>
              <IconButton
                size="sm"
                colorScheme="primary"
                aria-label="save"
                icon={<Save size="1.25rem" />}
                form="add-personalized-attributes-form"
                type="submit"
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </FormProvider>
  );
};
