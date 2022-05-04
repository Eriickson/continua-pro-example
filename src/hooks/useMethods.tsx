import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export const useMethods = <T,>() => {
  // @ts-ignore
  const [methods, setMethods] = useState({} as UseFormReturn<T, any>);

  return { methods, setMethods };
};
