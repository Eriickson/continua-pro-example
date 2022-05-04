import { InputControl } from "@/components";
import { FormProvider } from "@/providers";
import React, { FC, useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Stack, HStack, IconButton } from "@chakra-ui/react";
import { Save, X } from "react-feather";
import numeral from "numeral";
import { useRouter } from "next/router";

interface AddPriceArrayModalFormProps {
  onSubmit: (values: any) => void;
}

interface PriceArray {
  credit_amount: number;
  price: number;
}

export const AddPriceArrayModalForm: FC<AddPriceArrayModalFormProps> = ({ onSubmit }) => {
  const [creditAmount, setCreditAmount] = useState("");
  const [price, setPrice] = useState("");
  const [priceArray, setPriceArray] = useState<PriceArray[]>([]);
  const [methods, setMethods] = useState<any>();

  const { query } = useRouter();

  return (
    <FormProvider
      id="add-price-array-modal-form"
      setMethods={setMethods}
      onSubmit={(values: any) => {
        const { name } = values;

        let newPriceArray = priceArray;

        if (creditAmount && price)
          newPriceArray = [...priceArray, { credit_amount: Number(creditAmount), price: Number(price) }];

        onSubmit({ name, entries_attributes: newPriceArray, credit_plan_id: Number(query.id) });
      }}
    >
      <Stack>
        <InputControl formControl={{ label: "Nombre del paquete de precios" }} name="name" rules={{ required: true }} />
        <Table size="sm">
          <Thead>
            <Tr>
              <Th textAlign="center" border="none"></Th>
              <Th textAlign="center" border="none"></Th>
              <Th textAlign="center" border="none"></Th>
              <Th border="none" pb="0" p="0"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {priceArray.map((item, i) => (
              <Tr key={i}>
                <Td fontWeight="medium" border="1px solid" textAlign="center" w="0">
                  {i + 1}
                </Td>
                <Td fontWeight="medium" border="1px solid" textAlign="center">
                  {numeral(item.credit_amount).format("0,0.00")}
                </Td>
                <Td fontWeight="medium" border="1px solid" borderLeft="1px solid" textAlign="center">
                  {numeral(item.price).format("0,0.00")}
                </Td>
                <Td w="0" p="0" fontWeight="medium" border="1px solid" textAlign="center">
                  <IconButton
                    _focus={{}}
                    aria-label="Eliminar"
                    icon={<X size="1.25rem" />}
                    size="sm"
                    rounded="none"
                    colorScheme="red"
                    onClick={() => {
                      const newPriceArray = priceArray.filter((_, j) => j !== i);
                      setPriceArray(newPriceArray);
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Box>
          <HStack mt="0">
            <Box flex="1">Créditos</Box>
            <Box flex="1">Precios</Box>
            <Box w="8"></Box>
          </HStack>
          <HStack spacing="0.5">
            {/* FIXME: Add Input numbers */}
            <InputControl
              name="credit_amount"
              inputProps={{
                onChange: (e) => setCreditAmount(e.target.value.replace(/\D/g, "")),
                type: "number",
                flex: "1",
                value: creditAmount,
              }}
            />
            <InputControl
              name="price"
              inputProps={{
                onChange: (e) => setPrice(e.target.value.replace(/\D/g, "")),
                type: "number",
                flex: "1",
                value: price,
              }}
            />
            <Box>
              <IconButton
                _focus={{}}
                aria-label="Guardar"
                icon={<Save size="1.25rem" />}
                size="sm"
                colorScheme="blue"
                rounded="sm"
                onClick={() => {
                  if (!creditAmount) {
                    methods?.setFocus("credit_amount");
                    return;
                  }
                  if (!price) {
                    methods?.setFocus("price");
                    return;
                  }

                  setPriceArray([...priceArray, { credit_amount: Number(creditAmount), price: Number(price) }]);
                  setCreditAmount("");
                  setPrice("");
                  methods?.setFocus("credit_amount");
                }}
              />
            </Box>
          </HStack>
        </Box>
      </Stack>
    </FormProvider>
  );
};
