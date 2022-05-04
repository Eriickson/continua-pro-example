import { UseDisclosureProps } from "@chakra-ui/react";

import { useHandleResponse } from "@/hooks";
import { AsyncThunk } from "@reduxjs/toolkit";

interface OnSubmitArgs<TValues> {
  disclosure: UseDisclosureProps;
  values: TValues;
  action: AsyncThunk<any, any, any>;
  option?: {
    keepOpenWhenDone?: boolean;
  };
}

export function useOnSubmit<TValues>() {
  const handleResponse = useHandleResponse();

  async function onSubmit({ values, disclosure, action, option }: OnSubmitArgs<TValues>) {
    const { keepOpenWhenDone } = option || {};
    const response: any = await action(values);

    handleResponse(response, keepOpenWhenDone ? undefined : disclosure.onClose);

    return response;
  }

  return { onSubmit };
}
