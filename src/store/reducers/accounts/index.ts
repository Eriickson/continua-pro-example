import { createSlice } from "@reduxjs/toolkit";

import { ItemsReducers } from "@continuapro/redux";
import { Account, AccountAddress, AccountSettings } from "@continuapro/entity";

import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

import { getAccountsReducers } from "./actions/getAccounts";
import { getAccountReducers } from "./actions/getAccount";
import { createAccountReducers } from "./actions/createAccount";
import { updateAccountReducers } from "./actions/updateAccount";
import { deleteAccountReducers } from "./actions/deleteAccount";
import { getAccountSettingsReducers } from "./actions/getAccountSettings";

export interface InitialState {
  accounts: Account[];
  account: Account | null;
  settings: AccountSettings[];
  getAccounts: ItemsReducers<Account[]>;
  createAccount: ItemsReducers<Account>;
  getAccount: ItemsReducers<Account>;
  updateAccount: ItemsReducers<Account>;
  updateAccountAddress: ItemsReducers<AccountAddress>;
  deleteAccount: ItemsReducers<Account>;
  getAccountSettings: ItemsReducers<AccountSettings[]>;
}

const initialState = {
  getAccounts: initialStateItemReducerArray,
  accounts: [],
  account: null,
  settings: [],
  createAccount: initialStateItemReducer,
  getAccount: initialStateItemReducer,
  updateAccount: initialStateItemReducer,
  updateAccountAddress: initialStateItemReducer,
  deleteAccount: initialStateItemReducer,
  getAccountSettings: initialStateItemReducer,
} as InitialState;

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: {
    ...getAccountsReducers,
    ...createAccountReducers,
    ...getAccountReducers,
    ...updateAccountReducers,
    ...deleteAccountReducers,
    ...getAccountSettingsReducers,
  },
});

export const { reducer } = accountSlice;

export default accountSlice.reducer;
