import { CampaignType } from "@continuapro/entity";

declare module "@continuapro/redux" {
  interface CreateCampaignsArgs {
    campaign: { campaign_template_id?: number; name?: string; description?: string; category: number };
    campaignType: CampaignType;
  }

  interface SendTestCampaignArgs {
    campaignId: number;
    recipient: string;
    campaignType: CampaignType;
  }
}
