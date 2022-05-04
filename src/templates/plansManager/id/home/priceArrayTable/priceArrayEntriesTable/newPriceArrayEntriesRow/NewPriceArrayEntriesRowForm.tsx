import { useAction, useSelector } from "@/store";
import { IconButton, Td, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { Save } from "react-feather";
import { useForm } from "react-hook-form";

interface NewPriceArrayEntriesRowFormProps {
  priceArrayId: number;
  onSubmit(values: NewPriceArrayEntriesRowFormType): void;
}

export const NewPriceArrayEntriesRowForm: FC<NewPriceArrayEntriesRowFormProps> = ({ onSubmit, priceArrayId }) => {
  const { getCreditPlan } = useAction();
  const { query } = useRouter();
  const { register, handleSubmit, setValue, reset } = useForm<NewPriceArrayEntriesRowFormType>();
  const { data } = useSelector(({ creditPlans }) => creditPlans.createPriceArrayEntry);

  useEffect(() => {
    if (data) {
      setValue("price", 0);
      setValue("creditAmount", 0);
    }
  }, [data]);

  return (
    <>
      <form id={`${priceArrayId}.new-price-array-entry`} onSubmit={handleSubmit(onSubmit)} />
      <Td p="1" borderWidth="0">
        <Input
          form={`${priceArrayId}.new-price-array-entry`}
          textAlign="center"
          variant="flushed"
          fontWeight="semibold"
          placeholder="Nuevo Crédito"
          {...register("creditAmount", { required: true })}
        />
      </Td>
      <Td p="0" borderWidth="0">
        <Input
          form={`${priceArrayId}.new-price-array-entry`}
          textAlign="center"
          variant="flushed"
          fontWeight="semibold"
          placeholder="Nuevo Precio"
          {...register("price", { required: true })}
        />
      </Td>
      <Td textAlign="right" p="0" borderWidth="0">
        <IconButton
          form={`${priceArrayId}.new-price-array-entry`}
          type="submit"
          _focus={{}}
          size="sm"
          variant="ghost"
          colorScheme="green"
          aria-label="Guardar"
          icon={<Save size="1.25rem" />}
        />
      </Td>
    </>
  );
};
