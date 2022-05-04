import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as login from "./reducers/login/login";
import * as contacts from "./reducers/contacts/actions";
import * as roles from "./reducers/roles/actions";
import * as users from "./reducers/users/actions";
import * as permissions from "./reducers/permissions/actions";
import * as personalizedAttributes from "./reducers/personalizedAttributes/actions";
import * as creditPlan from "./reducers/creditPlans/actions";
import * as contactSegments from "./reducers/contactSegments/actions";
import * as notificationSettings from "./reducers/notificationSettings/actions";
import * as suppressionList from "./reducers/suppressionList/actions";
import * as notificationPreferences from "./reducers/notificationPreferences/actions";
import * as channels from "./reducers/channels/actions";
import * as systemSettings from "./reducers/systemSettings/actions";
// import * as notificationSchedules from "./reducers/notificationSchedules/notificationSchedules";
// import * as customerReports from "./reducers/customerReports/customerReports";
import * as dnsSettings from "./reducers/dnsSettings/actions";
import * as senders from "./reducers/senders/actions";
import * as customerReports from "./reducers/customerReports/actions";
import * as resetPassword from "./reducers/resetPassword/actions";
import * as profile from "./reducers/profile/actions";
import * as notifications from "./reducers/notifications/actions";
import * as campaigns from "./reducers/campaigns/actions";
import * as accounts from "./reducers/accounts/actions";
import * as catalogs from "./reducers/catalogs/actions";
import * as utilities from "./reducers/utilities/actions";
import * as notificationSchedules from "./reducers/notificationSchedules/actions";
import * as campaignTemplates from "./reducers/campaignTemplates/actions";
import * as paymentGateways from "./reducers/paymentGateways/actions";
import * as channelServiceProviders from "./reducers/channelServiceProviders/actions";

export function useAction() {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...senders,
      ...login,
      ...contacts,
      ...roles,
      ...users,
      ...permissions,
      ...personalizedAttributes,
      ...creditPlan,
      ...contactSegments,
      ...notificationSettings,
      ...suppressionList,
      ...notificationPreferences,
      ...channels,
      ...campaignTemplates,
      ...systemSettings,
      ...notificationSchedules,
      ...customerReports,
      ...dnsSettings,
      ...resetPassword,
      ...profile,
      ...notifications,
      ...accounts,
      ...catalogs,
      ...notificationSchedules,
      ...campaigns,
      ...paymentGateways,
      ...channelServiceProviders,
      ...utilities,
    },
    dispatch
  );
}
