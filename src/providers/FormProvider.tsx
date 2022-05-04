import React, { FC, useEffect, useState } from "react";

import { useForm, FormProvider as _FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormProviderProps {
  id: string;
  onSubmit(values: any, methods: UseFormReturn<FieldValues, object>): void;
  setMethods?: any;
  defaultValues?: any;
}

export const FormProvider: FC<FormProviderProps> = ({ id, children, onSubmit, setMethods, defaultValues }) => {
  const [defaultValuesInternal, setDefaultValuesInternal] = useState<any>(null);
  const methods = useForm();

  useEffect(() => {
    setMethods?.(methods);
  }, []);

  useEffect(() => {
    if (defaultValues && JSON.stringify(defaultValues) !== JSON.stringify(defaultValuesInternal)) {
      methods.reset(defaultValues);
      setDefaultValuesInternal(defaultValues);
    }
  }, [defaultValues]);

  return (
    <_FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit((values) => onSubmit(values, methods))}>
        {children}
      </form>
    </_FormProvider>
  );
};
