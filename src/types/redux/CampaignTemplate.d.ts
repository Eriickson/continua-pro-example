import { CampaignTemplate, CampaignType } from "@continuapro/entity";

declare module "@continuapro/redux" {
  interface GetCampaignTemplateArgs {
    id: number;
    campaignType: CampaignType;
  }

  interface CreateCampaignTemplateArgs {
    campaign_template: Omit<CampaignTemplate, "id">;
    campaignType: CampaignType;
  }

  interface DeleteCampaignTemplateArgs {
    id: string;
    campaignType: CampaignType;
  }
}
