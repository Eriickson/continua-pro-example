import { InputSelectControl } from "@/components";
import { useSelector } from "@/store";
import { HStack } from "@chakra-ui/react";
import React, { useState } from "react";

export const FieldTo = () => {
  const { contactSegments, getContactSegments } = useSelector(({ contactSegments }) => contactSegments);

  const [toSelected, setToSelected] = useState(false);

  async function onChangeField(option: Option) {
    console.log(option);
  }

  return (
    <HStack>
      <InputSelectControl
        formControl={{ label: "Enviar a" }}
        name="to"
        options={contactSegments.map((item) => ({ label: item.name, value: item.id }))}
        selectProps={{ isLoading: getContactSegments.isLoading, onChange: onChangeField }}
      />
    </HStack>
  );
};
