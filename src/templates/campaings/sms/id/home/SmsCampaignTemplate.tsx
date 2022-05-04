import { useAction } from "@/store";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { MessegerServicesCampaignDetailsTemplate } from "src/templates/campaings/template/messegerServicesCampaignDetailsTemplate/MessegerServicesCampaignDetailsTemplate";

export const SmsCampaignTemplate: FC = () => {
  const { getCampaign } = useAction();

  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getCampaign({ id: Number(query.id), campaignType: "sms" });
    }
  }, [query]);

  return (
    <div>
      <MessegerServicesCampaignDetailsTemplate />
    </div>
  );
};
