import { InputControl, InputSelectControl } from "@/components";
import { useSelector } from "@/store";
import { HStack, IconButton, List, ListItem, Stack, RadioGroup, Text, Radio, Button } from "@chakra-ui/react";
import React from "react";
import { Plus, X } from "react-feather";
import { Controller, useFieldArray } from "react-hook-form";
import { FormControl } from "src/components/form/formControl";

export const FilterList = () => {
  const { filters } = useSelector(({ utilities }) => utilities);
  const { isLoading } = useSelector(({ contacts }) => contacts.filterContacts);
  const { fields, append, remove } = useFieldArray({ name: "conditions" });

  return (
    <List spacing={3}>
      {fields.map((_, index) => (
        <>
          <ListItem key={index}>
            <HStack alignItems="flex-end">
              <InputSelectControl
                name={`conditions.${index}.conditions[0].field`}
                formControl={{ label: "Campo" }}
                options={[{ label: "Email", value: "email" }]}
                rules={{ required: true }}
              />
              <InputSelectControl
                name={`conditions.${index}.conditions[0].operator`}
                formControl={{ label: "Operador" }}
                options={filters.map((filter) => ({ label: filter.label, value: filter.operator }))}
                rules={{ required: true }}
              />
              <InputControl name={`conditions.${index}.conditions[0].value`} formControl={{ label: "Valor" }} />
              <IconButton
                variant="ghost"
                bgColor="red.50"
                colorScheme="red"
                _focus={{}}
                aria-label=""
                icon={<X />}
                onClick={() => remove(index)}
              />
            </HStack>
          </ListItem>
          {fields.length - 1 !== index && (
            <Controller
              name={`conditions.${index}.operator`}
              render={({ field }) => (
                <FormControl name={`conditions.${index}.operator`}>
                  <RadioGroup value={field.value} onChange={(e) => field.onChange(e)} size="lg">
                    <Stack direction="row">
                      <Radio value="and">
                        <Text fontWeight="medium"> AND</Text>
                      </Radio>
                      <Radio value="or">
                        <Text fontWeight="medium">OR</Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              )}
            />
          )}
        </>
      ))}
      <ListItem>
        <HStack alignItems="flex-end">
          <IconButton
            variant="ghost"
            bgColor="secondary.50"
            colorScheme="secondary"
            _focus={{}}
            aria-label=""
            icon={<Plus />}
            onClick={() => append({ operator: "and" })}
            isLoading={isLoading}
          />
          <Button type="submit" isLoading={isLoading}>
            Aplicar filtros
          </Button>
        </HStack>
      </ListItem>
    </List>
  );
};
