import { extendTheme } from "@chakra-ui/react";
import { colors } from "./color";
import { components } from "./componentsStyles";

export const globalTheme = extendTheme({
  colors,
  components,
});
