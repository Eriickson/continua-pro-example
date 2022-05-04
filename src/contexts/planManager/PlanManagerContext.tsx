import React, { createContext, Context, FC, useContext, useState } from "react";
import { useClient, useHandlerTryCatch } from "src/hooks";
import { useUI } from "../ui/UIContext";

export interface EntryPlan {
  id: number;
  credit_amount: number;
  price: string | number;
  price_array_id: number;
  created_at: string;
  updated_at: string;
}

export interface PricePlans {
  id: number;
  name: string;
  entries: EntryPlan[];
}

export interface CreditPlan {
  id: number;
  name: string;
  price_arrays: PricePlans[];
}

interface IPlanManagerContext {
  creditPlans: CreditPlan[];
  getCreditPlans(): Promise<void>;
  deletePlan(id: number): Promise<boolean>;
}

const PlanManagerContext = createContext<IPlanManagerContext | null>(
  null
) as Context<IPlanManagerContext>;

const PlanManagerProvider: FC = ({ children }) => {
  const { client } = useClient();
  const { setLoadingScreen } = useUI();
  const { handlerError } = useHandlerTryCatch();
  const [creditPlans, setCreditPlans] = useState<CreditPlan[]>([]);

  async function getCreditPlans() {
    try {
      const { data } = await client.get("/credit_plans");
      if (data.code === 200) {
        setCreditPlans(data.data);
        return;
      }
    } catch (err) {
      console.log({ err });
    }
  }

  async function deletePlan(id: number): Promise<boolean> {
    setLoadingScreen({ isLoading: true, label: "Eliminando Plan..." });
    try {
      const { data } = await client.delete(`/credit_plans/${id}`);
      if (data.code === 200) {
        return true;
      }
    } catch (err: any) {
      handlerError(err);
    }
    return false;
  }

  return (
    <PlanManagerContext.Provider
      value={{ creditPlans, getCreditPlans, deletePlan }}
    >
      {children}
    </PlanManagerContext.Provider>
  );
};

const usePlanManager = () => useContext(PlanManagerContext);

export { usePlanManager, PlanManagerProvider };
