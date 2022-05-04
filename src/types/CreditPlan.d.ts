export interface EntryPlan {
  id: number;
  credit_amount: number;
  price: string;
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
  channel_id: number;
  price_arrays: PricePlans[];
}

export interface PriceArrayEntry {
  id: number;
  credit_amount: number;
  price: number;
  price_array_id: number;
}

export interface PriceArray {
  id: number;
  name: string;
  credit_plan_id: number;
  entries_attributes: PriceArrayEntry[];
}
