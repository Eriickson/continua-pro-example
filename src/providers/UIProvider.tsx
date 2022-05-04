import React, { FC } from "react";
import { LoadingScreen } from "../components";
import { useUI } from "../contexts/ui/UIContext";

export const UIComponentsProvider: FC = ({ children }) => {
  const { loadingScreen } = useUI();
  return (
    <div>
      {children}
      <LoadingScreen {...loadingScreen} />
    </div>
  );
};
