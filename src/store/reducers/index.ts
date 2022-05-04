import { combineReducers } from "@reduxjs/toolkit";

import sortKeys from "sort-object-keys";

// Reducers
import senders from "./senders";
import contacts from "./contacts";
import login from "./login/login";
import roles from "./roles";
import users from "./users";
import permissions from "./permissions";
import personalizedAttributes from "./personalizedAttributes";
import creditPlans from "./creditPlans";
import contactSegments from "./contactSegments";
import notificationSettings from "./notificationSettings";
import notificationPreferences from "./notificationPreferences";
import suppressionList from "./suppressionList";
import channels from "./channels";
// import campaigns from "./campaigns/campaigns";
import systemSettings from "./systemSettings";
// import notificationSchedules from "./notificationSchedules/notificationSchedules";
// import customerReports from "./customerReports/customerReports";
import dnsSettings from "./dnsSettings";
import customerReports from "./customerReports";
import resetPassword from "./resetPassword";
import profile from "./profile";
import notifications from "./notifications";
import campaigns from "./campaigns";
import accounts from "./accounts";
import catalogs from "./catalogs";
import notificationSchedules from "./notificationSchedules";
import campaignTemplates from "./campaignTemplates";
import paymentGateways from "./paymentGateways";
import channelServiceProviders from "./channelServiceProviders";
import utilities from "./utilities";

const reducers = sortKeys({
  senders,
  login,
  contacts,
  roles,
  users,
  permissions,
  personalizedAttributes,
  creditPlans,
  contactSegments,
  notificationSettings,
  suppressionList,
  notificationPreferences,
  channels,
  campaigns,
  campaignTemplates,
  systemSettings,
  notificationSchedules,
  // customerReports,
  dnsSettings,
  customerReports,
  resetPassword,
  profile,
  notifications,
  accounts,
  catalogs,
  paymentGateways,
  channelServiceProviders,
  utilities,
});

export const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;
