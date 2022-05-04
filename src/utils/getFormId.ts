import { FC } from "react";

import { paramCase } from "change-case";
import { FormElement } from "@continuapro/form";

export function getFormId(form: FC<any>) {
  return paramCase(form.name);
}
