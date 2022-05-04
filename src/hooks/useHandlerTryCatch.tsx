import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUI } from "src/contexts/ui/UIContext";

export const useHandlerTryCatch = () => {
  const toast = useToast();
  const { setLoadingScreen } = useUI();
  const [err, setErr] = useState<any>(null);

  function handlerError(newErr: any) {
    setErr(newErr);
  }

  function showAlert() {
    const message = err?.response?.data?.message;
    toast({
      title:
        message?.split(":")[0] ||
        "Error al realizar esta acción, Inténtelo más tarde.",
      description: message?.split(":")[1] || err.message,
      variant: "left-accent",
      status: "error",
      position: "top-right",
    });
  }

  useEffect(() => {
    if (err) {
      setLoadingScreen({ isLoading: false });
      showAlert();
    }
  }, [err]);

  return { ping: "pong", handlerError };
};
