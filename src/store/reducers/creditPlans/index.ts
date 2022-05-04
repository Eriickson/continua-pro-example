import { createSlice } from "@reduxjs/toolkit";

import { CreditPlan, PriceArray } from "@/types";

import { getCreditPlansReducers } from "./actions/getCreditPlans";
import { getCreditPlanReducers } from "./actions/getCreditPlan";
import { createCreditPlanReducers } from "./actions/createCreditPlan";
import { deleteCreditPlanReducers } from "./actions/deleteCreditPlan";
import { updateCreditPlanReducers } from "./actions/updateCreditPlan";
import { createPriceArrayReducers } from "./actions/createPriceArray";
import { deletePriceArrayReducers } from "./actions/deletePriceArray";
import { createPriceArrayEntryReducers } from "./actions/createPriceArrayEntry";
import { deletePriceArrayEntryReducers } from "./actions/deletePriceArrayEntry";
import { updatePriceArrayEntryReducers } from "./actions/updatePriceArrayEntry";
import { ItemReducerService } from "@continuapro/redux";

const initialStateService = {
  isLoading: false,
  data: null,
  err: null,
  hasError: false,
};

export interface InitialState {
  creditPlans: CreditPlan[];
  creditPlan: CreditPlan | null;
  getCreditPlans: ItemReducerService<CreditPlan[]>;
  getCreditPlan: ItemReducerService<CreditPlan>;
  createCreditPlan: ItemReducerService<CreditPlan>;
  deleteCreditPlan: ItemReducerService<boolean>;
  updateCreditPlan: ItemReducerService<CreditPlan>;
  createPriceArray: ItemReducerService<PriceArray>;
  deletePriceArray: ItemReducerService<boolean>;
  createPriceArrayEntry: ItemReducerService<any>;
  deletePriceArrayEntry: ItemReducerService<any>;
  updatePriceArrayEntry: ItemReducerService<any>;
}

const initialState: InitialState = {
  creditPlans: [],
  creditPlan: null,
  getCreditPlans: initialStateService,
  getCreditPlan: initialStateService,
  createCreditPlan: initialStateService,
  createPriceArray: initialStateService,
  deleteCreditPlan: initialStateService,
  updateCreditPlan: initialStateService,
  deletePriceArray: initialStateService,
  createPriceArrayEntry: initialStateService,
  deletePriceArrayEntry: initialStateService,
  updatePriceArrayEntry: initialStateService,
};

const creditPlansSlice = createSlice({
  name: "creditPlans",
  initialState,
  reducers: {},
  extraReducers: {
    ...getCreditPlansReducers,
    ...createCreditPlanReducers,
    ...getCreditPlanReducers,
    ...deleteCreditPlanReducers,
    ...updateCreditPlanReducers,
    ...createPriceArrayReducers,
    ...deletePriceArrayReducers,
    ...createPriceArrayEntryReducers,
    ...deletePriceArrayEntryReducers,
    ...updatePriceArrayEntryReducers,
  },
});
export const { reducer } = creditPlansSlice;

export default creditPlansSlice.reducer;
