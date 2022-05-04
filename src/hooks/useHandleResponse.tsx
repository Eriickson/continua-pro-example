import { useToast } from "./useToast";

type ActionType = "CREATE" | "UPDATE" | "DELETE";

const actionType: Record<string, ActionType> = {
  create: "CREATE",
  update: "UPDATE",
  delete: "DELETE",
};

const titleAction: Record<ActionType, string> = {
  CREATE: "Creación Completada",
  UPDATE: "Actualización Completada",
  DELETE: "Eliminación Completada",
};

type ActionTypesType = "PENDING" | "FULFILLED" | "REJECTED";

const actionsArray: ActionTypesType[] = ["PENDING", "FULFILLED", "REJECTED"];

const actionTypes: Record<string, ActionTypesType> = {
  pending: "PENDING",
  fulfilled: "FULFILLED",
  rejected: "REJECTED",
};

// Code Whitelist
const codeWhiteList = [200, 201, 204];

// Code Blacklist
const codeBlackList = [400, 401, 403, 404, 500];

export function useHandleResponse() {
  const { showToast } = useToast();

  function destructuringResponse(response: any) {
    const type = actionsArray.find((action) => response.type.includes(action.toLowerCase()));

    const [entity, actionInternal] = String(response.type).split("/");

    const action = actionType[actionInternal];

    return { action, type, entity };
  }

  async function handlerResponse(response: any, onClose?: () => void) {
    const { type, action } = destructuringResponse(response);

    switch (type) {
      case "REJECTED":
        {
          const error = JSON.parse(response.error.message || "{}");
          showToast({
            status: "error",
            title: "Ha ocurrido un error",
            description: error.message || "Ha ocurrido un error al realizar esta acción",
          });
        }
        break;
      case "FULFILLED":
        {
          if (codeWhiteList.includes(response.payload.status)) {
            showToast({
              status: "success",
              title: titleAction[action],
              description: response.payload.data.message,
            });
            onClose?.();
          }
        }
        break;

      default:
        break;
    }
  }

  return handlerResponse;
}
