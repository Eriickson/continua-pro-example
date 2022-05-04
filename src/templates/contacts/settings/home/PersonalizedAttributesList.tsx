import React from "react";
import { useAction, useSelector } from "@/store";
import { Box, IconButton, Table, Tbody, Td, Tooltip, Tr } from "@chakra-ui/react";
import { Hash, Save, Trash2, Type } from "react-feather";
import { InputControl, RadioGroup } from "@/components";
import { FormProvider } from "@/providers";

export const PersonalizedAttributesList = () => {
  const { updatePersonalizedAttribute, deletePersonalizedAttribute } = useAction();
  const { personalizedAttributes } = useSelector(({ personalizedAttributes }) => personalizedAttributes);
  const { isLoading } = useSelector(({ personalizedAttributes }) => personalizedAttributes.updatePersonalizedAttribute);

  return (
    <>
      {personalizedAttributes.map(({ data_type, id, name }) => {
        return (
          <FormProvider
            key={id}
            id={`update-personalized-attributes-with-id-${id}-form`}
            onSubmit={(personalized_attribute) =>
              updatePersonalizedAttribute({
                id,
                personalized_attribute,
              })
            }
            defaultValues={{ name }}
          >
            <Table>
              <Tbody>
                <Tr>
                  <Td pl={0}>
                    <InputControl name="name" inputProps={{ placeholder: "Ej: xyz" }} />
                  </Td>
                  <Td pl={0}>
                    <RadioGroup
                      name="data_type"
                      defaultValue={data_type}
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
                  <Td w="5" isNumeric p="2">
                    <IconButton
                      variant="ghost"
                      size="sm"
                      colorScheme="red"
                      aria-label="save"
                      icon={<Trash2 size="1.25rem" />}
                      isLoading={isLoading}
                      onClick={() => deletePersonalizedAttribute({ id })}
                    />
                  </Td>
                  <Td w="5" p="2" isNumeric>
                    <IconButton
                      size="sm"
                      colorScheme="primary"
                      aria-label="save"
                      icon={<Save size="1.25rem" />}
                      form={`update-personalized-attributes-with-id-${id}-form`}
                      type="submit"
                      isLoading={isLoading}
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </FormProvider>
        );
      })}
    </>
  );
};
