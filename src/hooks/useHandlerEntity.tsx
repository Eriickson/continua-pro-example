import { useUI } from "@/contexts";
import { useClient } from "./useClient";
import { useHandlerTryCatch } from "./useHandlerTryCatch";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ResponseApi } from "./useFetch";
type IdEntity = string | number;

interface CreateEntityArgs {
  path: string;
  values: any;
}

interface CreateEntityResponse<T> {
  successful: boolean;
  response: T;
}

interface UpdateEntityArgs {
  id: IdEntity;
  path: string;
  newValues: any;
}

interface UpdateEntityResponse<T> {
  successful: boolean;
  response: T;
}

export const useHandlerEntity = () => {
  const { setLoadingScreen } = useUI();
  const { client } = useClient();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const { handlerError } = useHandlerTryCatch();

  async function createEntity<T>({
    path,
    values,
  }: CreateEntityArgs): Promise<CreateEntityResponse<T>> {
    setIsLoading(true);
    setLoadingScreen({ isLoading: true, label: "Creando..." });
    try {
      const { data } = await client.post<ResponseApi<T>>(path, values);
      if ([200, 201].includes(data.code)) {
        toast({
          title: "Creación completada",
          description: data.message,
          variant: "left-accent",
          status: "success",
          position: "top-right",
        });

        setIsLoading(false);
        setLoadingScreen({ isLoading: false });
        return {
          successful: true,
          response: data.data,
        };
      }
    } catch (err) {
      handlerError(err);
    }
    setIsLoading(false);
    return {
      successful: false,
      response: {} as T,
    };
  }

  async function updateEntity<T>({
    id,
    newValues,
    path,
  }: UpdateEntityArgs): Promise<UpdateEntityResponse<T>> {
    setLoadingScreen({ isLoading: true, label: "Actualizando..." });
    try {
      const { data } = await client.put<ResponseApi<T>>(
        path.replace(/{id}/, String(id)),
        newValues
      );

      if (data.code === 200) {
        toast({
          title: "Actualización completada",
          description: data.message,
          variant: "left-accent",
          status: "success",
          position: "top-right",
        });
        setLoadingScreen({ isLoading: false });
        return {
          successful: true,
          response: data.data,
        };
      }
    } catch (err) {
      handlerError(err);
    }
    return {
      successful: false,
      response: {} as T,
    };
  }

  return { updateEntity, createEntity, isLoading };
};
