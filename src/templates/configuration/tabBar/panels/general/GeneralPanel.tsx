import { useAction } from "@/store";
import React, { useEffect } from "react";
import { GeneralTabBarPanel } from "./tabBar/GeneralTabBarPanel";

export const GeneralPanel = () => {
  const { getSystemSettings } = useAction();

  useEffect(() => {
    getSystemSettings();
  }, []);
  return <GeneralTabBarPanel />;
};
