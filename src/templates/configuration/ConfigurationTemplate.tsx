import { useAction } from "@/store";
import React, { useEffect } from "react";
import { TabBarConfiguration } from "./tabBar/TabBarConfiguration";

export const ConfigurationTemplate = () => {
  const { getChannels } = useAction();

  useEffect(() => {
    getChannels();
  }, []);

  return <TabBarConfiguration />;
};
