import React from "react";

import { AccountsTemplate } from "@/templates";
import { withAuth } from "@/hocs";

const AccountsPage = () => {
  return (
    <div>
      <AccountsTemplate />
    </div>
  );
};

export default withAuth(AccountsPage);
