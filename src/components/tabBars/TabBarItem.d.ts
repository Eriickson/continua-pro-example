import { FC, ReactElement } from "react";

export interface TabBarItems {
  label: string | ReactElement;
  PanelComponent?: FC;
}
