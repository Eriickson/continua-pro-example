import React, { createContext, Context, useState, FC, useContext } from "react";
import { LoadingScreenProps } from "../../components";

interface IUIContext {
  loadingScreen: LoadingScreenProps;
  setLoadingScreen(value: LoadingScreenProps): void;
}

const UIContext = createContext<IUIContext | null>(null) as Context<IUIContext>;

const UIProvider: FC = ({ children }) => {
  const [loadingScreen, setLoadingScreen] = useState<LoadingScreenProps>({
    label: "Cargando...",
    isLoading: false,
  });

  return (
    <UIContext.Provider value={{ loadingScreen, setLoadingScreen }}>
      {children}
    </UIContext.Provider>
  );
};

const useUI = () => useContext(UIContext);

export { useUI, UIProvider };
